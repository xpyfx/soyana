import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
    onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="w-full animate-fade-in">
            <section className="min-h-[85vh] flex flex-col justify-center items-center px-6 relative">
                <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-600">Open to Work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-gradient leading-[1.1]">
                        化繁為簡，<br />
                        創造極致體驗。
                    </h1>
                    <p className="text-lg md:text-2xl text-apple-gray max-w-2xl mx-auto leading-relaxed font-light mb-10">
                        你好，我是 Alex。專注於打造直觀、優雅且高性能的數位產品。<br />
                        <span className="text-sm mt-2 block opacity-70">您可以點擊右下角的 ✨ 按鈕與我的 AI 分身對話。</span>
                    </p>
                    
                    <div className="flex gap-4 justify-center">
                        <button 
                            onClick={() => onNavigate(Page.PORTFOLIO)} 
                            className="bg-apple-text text-white px-8 py-3 rounded-full font-medium hover:bg-apple-gray hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-200"
                        >
                            瀏覽作品
                        </button>
                    </div>
                </div>
                
                <div className="absolute bottom-10 animate-bounce text-apple-gray opacity-50">
                    <ChevronDown />
                </div>
            </section>
        </div>
    );
};