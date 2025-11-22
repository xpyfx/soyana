import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.SKILLS:
        return <Skills />;
      case Page.PORTFOLIO:
        return <Portfolio />;
      case Page.RESUME:
        return <Resume onOpenChat={() => setIsChatOpen(true)} />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onToggleChat={() => setIsChatOpen(prev => !prev)} 
      />

      <main id="app-container" className="pt-16 min-h-screen flex flex-col relative">
        {renderPage()}
      </main>

      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;