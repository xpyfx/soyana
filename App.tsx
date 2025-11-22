import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Page } from './types';
import { Home, Zap, Layers, Briefcase, Mail, Sparkles } from 'lucide-react';

function App() {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Helper to scrollToFooter
    const scrollToFooter = () => {
        const footer = document.getElementById('contact-footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
    };

    // Handle navigation
    const handlePageSwitch = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSkillsClick = () => {
        const scrollToSkills = () => {
            const element = document.getElementById('skills-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (currentPage !== Page.Home) {
            setCurrentPage(Page.Home);
            // Wait for state update and render
            setTimeout(scrollToSkills, 100);
        } else {
            scrollToSkills();
        }
    };

    return (
        <div className="pt-16 min-h-screen flex flex-col relative">
            
            <Navbar currentPage={currentPage} onSwitchPage={handlePageSwitch} />

            {/* Floating Sidebar / Bottom Navigation Bar */}
            <aside className="fixed z-40 transition-all duration-300
                /* Mobile: Bottom center, horizontal layout */
                bottom-6 left-1/2 -translate-x-1/2 flex flex-row items-center
                /* Desktop: Right center, vertical layout */
                md:right-6 md:top-1/2 md:left-auto md:translate-x-0 md:-translate-y-1/2 md:flex-col md:gap-4 md:items-end md:bottom-auto"
            >
                <div className="glass-sidebar rounded-full flex items-center transition-all duration-300 shadow-lg
                    /* Mobile: Horizontal padding/gap */
                    flex-row p-2 gap-2
                    /* Desktop: Vertical padding/gap */
                    md:flex-col md:gap-4
                ">
                    
                    <button onClick={() => handlePageSwitch(Page.Home)} className="sidebar-btn p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group relative">
                        <Home className="w-5 h-5" />
                        {/* Tooltips hidden on mobile */}
                        <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            我
                        </span>
                    </button>

                    <button 
                        onClick={handleSkillsClick}
                        className="sidebar-btn p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group relative"
                    >
                        <Zap className="w-5 h-5" />
                         <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            技能
                        </span>
                    </button>

                    <button onClick={() => handlePageSwitch(Page.Portfolio)} className="sidebar-btn p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group relative">
                        <Layers className="w-5 h-5" />
                        <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            作品集
                        </span>
                    </button>

                    <button onClick={() => handlePageSwitch(Page.Resume)} className="sidebar-btn p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group relative">
                        <Briefcase className="w-5 h-5" />
                        <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            個人履歷
                        </span>
                    </button>

                    <button onClick={scrollToFooter} className="sidebar-btn p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 group relative">
                        <Mail className="w-5 h-5" />
                        <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            聯絡
                        </span>
                    </button>

                    {/* Divider: Vertical on mobile, Horizontal on desktop */}
                    <div className="bg-gray-300
                        /* Mobile */
                        w-[1px] h-6 mx-1
                        /* Desktop */
                        md:w-full md:h-[1px] md:my-1 md:mx-0 md:h-auto
                    "></div>
                    
                    <button 
                        onClick={() => setIsChatOpen(!isChatOpen)} 
                        className="sidebar-btn p-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300 group relative animate-pulse-slow shadow-lg shadow-blue-200"
                    >
                        <Sparkles className="w-5 h-5" />
                        <span className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
                            AI 助手
                        </span>
                    </button>
                </div>
            </aside>

            <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />

            <main>
                {currentPage === Page.Home && (
                    <div className="w-full animate-fade-in">
                        <Hero onViewWorks={() => handlePageSwitch(Page.Portfolio)} />
                        <Marquee />
                    </div>
                )}

                {currentPage === Page.Portfolio && (
                    <div className="w-full animate-fade-in">
                        <Portfolio />
                    </div>
                )}

                {currentPage === Page.Resume && (
                    <div className="w-full animate-fade-in">
                        <Resume onOpenChat={() => setIsChatOpen(true)} />
                    </div>
                )}

                <Footer />
            </main>
        </div>
    );
}

export default App;