import React from 'react';
import { Page } from '../types';
import { Home, Zap, Layers, Briefcase, Mail, Sparkles } from 'lucide-react';

interface SidebarProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
    onToggleChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, onToggleChat }) => {
    const navItems = [
        { page: Page.HOME, icon: Home, label: '我' },
        { page: Page.SKILLS, icon: Zap, label: '技能' },
        { page: Page.PORTFOLIO, icon: Layers, label: '作品集' },
        { page: Page.RESUME, icon: Briefcase, label: '個人履歷' },
        { page: Page.CONTACT, icon: Mail, label: '聯絡' },
    ];

    return (
        <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-end">
            <div className="glass-sidebar rounded-full p-2 flex flex-col gap-4 items-center transition-all duration-300">
                
                {navItems.map((item) => (
                    <button 
                        key={item.page}
                        onClick={() => onNavigate(item.page)}
                        className={`sidebar-btn p-3 rounded-full transition-colors duration-300 group relative ${currentPage === item.page ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            {item.label}
                        </span>
                    </button>
                ))}

                <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                
                <button 
                    onClick={onToggleChat} 
                    className="sidebar-btn p-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300 group relative animate-pulse-slow shadow-lg shadow-blue-200"
                >
                    <Sparkles className="w-5 h-5" />
                    <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                        AI 助手
                    </span>
                </button>
            </div>
        </aside>
    );
};