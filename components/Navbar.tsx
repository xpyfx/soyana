import React from 'react';
import { Page } from '../types';
import { Menu } from 'lucide-react';

interface NavbarProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
    const getLinkClass = (page: Page) => {
        const baseClass = "text-sm font-medium transition-colors nav-btn";
        return currentPage === page 
            ? `${baseClass} text-apple-text font-semibold` 
            : `${baseClass} text-apple-gray hover:text-apple-blue`;
    };

    return (
        <nav className="fixed top-0 w-full z-50 glass h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300">
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate(Page.HOME); }} 
                className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
            >
                Soy Anastasia
            </a>
            
            <div className="hidden md:flex items-center gap-8">
                <button onClick={() => onNavigate(Page.HOME)} className={getLinkClass(Page.HOME)}>我</button>
                <button onClick={() => onNavigate(Page.SKILLS)} className={getLinkClass(Page.SKILLS)}>技能</button>
                <button onClick={() => onNavigate(Page.PORTFOLIO)} className={getLinkClass(Page.PORTFOLIO)}>作品集</button>
                <button onClick={() => onNavigate(Page.RESUME)} className={getLinkClass(Page.RESUME)}>個人履歷</button>
                <button onClick={() => onNavigate(Page.CONTACT)} className={getLinkClass(Page.CONTACT)}>聯絡</button>
            </div>

            <button className="md:hidden p-2 text-apple-text">
                <Menu className="w-6 h-6" />
            </button>
        </nav>
    );
};