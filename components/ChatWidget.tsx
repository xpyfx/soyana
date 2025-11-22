import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, ArrowUp, Sparkles } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

// Declaration for marked on window since we load it via CDN
declare global {
    interface Window {
        marked: {
            parse: (text: string) => string;
        };
    }
}

interface ChatWidgetProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            text: '嗨！我是 Anastasia 的秘書，您有任何問題都可以詢問我，也可以透過我來了解 Ana！',
            isUser: false
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userText = inputValue.trim();
        setInputValue('');
        
        const newUserMessage: ChatMessage = {
            id: Date.now().toString(),
            text: userText,
            isUser: true
        };

        setMessages(prev => [...prev, newUserMessage]);
        setIsTyping(true);

        try {
            const aiText = await generateChatResponse(userText);
            const aiMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: aiText,
                isUser: false
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Failed to get response", error);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const renderMarkdown = (text: string) => {
        if (typeof window !== 'undefined' && window.marked) {
            return { __html: window.marked.parse(text) };
        }
        return { __html: text };
    };

    return (
        <>
            {/* Toggle Button (when closed) - We render this in the parent or sidebar usually, 
                but to keep self-contained logic we can render a trigger here if needed. 
                In this design, the sidebar triggers it. This component just handles the widget box.
            */}

            {/* Widget Box */}
            <div 
                className={`fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] glass-sidebar rounded-2xl shadow-2xl flex flex-col border border-white/50 transition-all duration-400 origin-bottom-right ${
                    isOpen ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-5 scale-90 pointer-events-none'
                }`}
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
                    <button onClick={onToggle} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                        <X className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white ${
                                msg.isUser ? 'bg-black' : 'bg-gradient-to-br from-blue-500 to-purple-600 text-xs'
                            }`}>
                                {msg.isUser ? <span className="text-xs">Me</span> : 'AI'}
                            </div>
                            <div 
                                className={`p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                                    msg.isUser 
                                        ? 'bg-black text-white rounded-tr-none' 
                                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none prose prose-sm max-w-none'
                                }`}
                            >
                                {msg.isUser ? (
                                    msg.text
                                ) : (
                                    <div dangerouslySetInnerHTML={renderMarkdown(msg.text)} />
                                )}
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
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
                            ref={inputRef}
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="問問關於 Ana 的秘密..." 
                            className="w-full bg-gray-100 border-0 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none pr-10"
                        />
                        <button 
                            onClick={handleSendMessage}
                            className="absolute right-1 top-1 bottom-1 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="text-[10px] text-center text-gray-400 mt-2">
                        AI 可能會產生不準確的資訊，請參考履歷內容為準。
                    </div>
                </div>
            </div>
        </>
    );
};