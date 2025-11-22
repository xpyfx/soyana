import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, ArrowUp, Sparkles } from 'lucide-react';
import { marked } from 'marked';
import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 'welcome', text: '嗨！我是 Anastasia 的秘書，您有任何問題都可以詢問我，也可以透過我來了解 Ana！', isUser: false }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text: input,
            isUser: true
        };
        
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-09-2025',
                contents: [
                   { 
                     role: 'user',
                     parts: [{ text: `${RESUME_CONTEXT}\n\n訪客問題: ${userMsg.text}` }]
                   }
                ],
            });

            const text = response.text;
            if (text) {
                setMessages(prev => [...prev, {
                    id: (Date.now() + 1).toString(),
                    text: text,
                    isUser: false
                }]);
            } else {
                throw new Error("No response text");
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: '抱歉，連線錯誤或服務暫時不可用，請稍後再試。',
                isUser: false
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div 
            className={`fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] glass-sidebar rounded-2xl shadow-2xl flex flex-col chat-container border border-white/50 transition-all duration-400 origin-bottom-right
            ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-90 pointer-events-none'}`}
        >
            {/* Header */}
            <div className="p-4 border-b border-gray-200/50 flex justify-between items-center bg-white/50 rounded-t-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Anastasia's AI Assistant</h3>
                        <p className="text-xs text-apple-gray">Powered by Gemini ✨</p>
                    </div>
                </div>
                <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                    <X className="w-4 h-4 text-gray-500" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs ${msg.isUser ? 'bg-black' : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}>
                            {msg.isUser ? <Sparkles className="w-4 h-4" /> : 'AI'}
                        </div>
                        <div 
                            className={`p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.isUser ? 'bg-black text-white rounded-tr-none' : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none prose prose-sm max-w-none'}`}
                            dangerouslySetInnerHTML={!msg.isUser ? { __html: marked.parse(msg.text) } : undefined}
                        >
                            {msg.isUser ? msg.text : undefined}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1 items-center h-[44px]">
                            <div className="typing-dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <div className="typing-dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <div className="typing-dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/80 border-t border-gray-200/50 rounded-b-2xl backdrop-blur-md">
                <div className="flex gap-2 relative">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="問問關於 Ana 的秘密..." 
                        className="w-full bg-gray-100 border-0 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none pr-10" 
                    />
                    <button onClick={handleSend} className="absolute right-1 top-1 bottom-1 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform">
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-[10px] text-center text-gray-400 mt-2">
                    AI 可能會產生不準確的資訊，請參考履歷內容為準。
                </div>
            </div>
        </div>
    );
};