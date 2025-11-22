import React from 'react';
import { Page } from '../types';

interface NavbarProps {
    currentPage: Page;
    onSwitchPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onSwitchPage }) => {
    const getLinkClass = (page: Page) => {
        return currentPage === page
            ? 'text-sm font-semibold text-apple-text hover:text-apple-blue transition-colors cursor-pointer'
            : 'text-sm font-medium text-apple-gray hover:text-apple-blue transition-colors cursor-pointer';
    };

    return (
        <nav className="fixed top-0 w-full z-50 glass h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300">
            <div 
                onClick={() => onSwitchPage(Page.Home)} 
                className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
            >
                Soy Anastasia
            </div>
            
            {/* Desktop Menu - Visible on tablet/desktop */}
            <div className="hidden md:flex items-center gap-8">
                <button onClick={() => onSwitchPage(Page.Home)} className={getLinkClass(Page.Home)}>我</button>
                <button onClick={() => onSwitchPage(Page.Portfolio)} className={getLinkClass(Page.Portfolio)}>作品集</button>
                <button onClick={() => onSwitchPage(Page.Resume)} className={getLinkClass(Page.Resume)}>個人履歷</button>
            </div>
        </nav>
    );
};