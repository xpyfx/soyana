import React, { useState } from 'react';
import { ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { WorkItem } from '../types';

const works: WorkItem[] = [
    {
        id: '1',
        title: 'Fintech Dashboard',
        category: 'web',
        description: 'Web Design • React',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        label: 'Data Visualization'
    },
    {
        id: '2',
        title: 'Travel Companion App',
        category: 'web',
        description: 'Mobile UI • UX Research',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        label: 'Mobile Interface'
    },
    {
        id: '3',
        title: 'E-commerce Redesign',
        category: 'web',
        description: 'Shopify • Redesign',
        imageUrl: 'https://images.unsplash.com/photo-1523206485979-5730dac27b13?auto=format&fit=crop&w=800&q=80',
        label: 'Shopping Experience'
    },
    {
        id: '4',
        title: 'Minimalist Branding',
        category: 'visual',
        description: 'Identity • Print',
        imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80',
        label: 'Brand Identity'
    },
    {
        id: '5',
        title: 'Festival Poster Series',
        category: 'visual',
        description: 'Typography • Layout',
        imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80',
        label: 'Event Design'
    },
    {
        id: '6',
        title: 'Eco Packaging',
        category: 'visual',
        description: 'Packaging • Sustainable',
        imageUrl: 'https://images.unsplash.com/photo-1632513890232-6a962c36c10d?auto=format&fit=crop&w=800&q=80',
        label: 'Product Design'
    },
    {
        id: '7',
        title: 'AI Dreamscape',
        category: 'ai',
        description: 'Midjourney • Concept',
        imageUrl: 'https://images.unsplash.com/photo-1686191128892-3b151dc9a8de?auto=format&fit=crop&w=800&q=80',
        label: 'Generative Art'
    },
    {
        id: '8',
        title: 'Neural Portraits',
        category: 'ai',
        description: 'Stable Diffusion • Lora',
        imageUrl: 'https://images.unsplash.com/photo-1675271591211-6011632993ce?auto=format&fit=crop&w=800&q=80',
        label: 'AI Portrait'
    },
    {
        id: '9',
        title: 'Future City',
        category: 'ai',
        description: 'DALL-E 3 • Environment',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        label: 'Environment Concept'
    },
    {
        id: '10',
        title: 'Nike Campaign Copy',
        category: 'copy',
        description: 'Ad Copy • Slogan',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
        label: 'Product Copywriting'
    },
    {
        id: '11',
        title: 'Tech Blog Series',
        category: 'copy',
        description: 'Content Marketing',
        imageUrl: 'https://images.unsplash.com/photo-1499750310159-5420a5cda1b0?auto=format&fit=crop&w=800&q=80',
        label: 'Technical Writing'
    },
    {
        id: '12',
        title: 'Brand Storytelling',
        category: 'copy',
        description: 'Narrative Strategy',
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        label: 'Brand Voice'
    }
];

export const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredWorks = filter === 'all' 
        ? works 
        : works.filter(work => work.category === filter);

    const handleFilter = (category: string) => {
        setFilter(category);
    };

    const getButtonClass = (category: string) => {
        const baseClass = "px-6 py-2 rounded-full text-sm font-medium transition-all";
        return filter === category
            ? `${baseClass} bg-white shadow-sm text-black`
            : `${baseClass} text-gray-500 hover:text-black`;
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen animate-fade-in relative">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">精選作品集</h2>
                <p className="text-apple-gray text-lg">Portfolio</p>
            </div>

            {/* Sub-Navigation / Filter */}
            <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar px-4">
                <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
                    <button onClick={() => handleFilter('all')} className={getButtonClass('all')}>全部</button>
                    <button onClick={() => handleFilter('visual')} className={getButtonClass('visual')}>視覺設計 (Visual)</button>
                    <button onClick={() => handleFilter('web')} className={getButtonClass('web')}>網頁設計 (Web)</button>
                    <button onClick={() => handleFilter('copy')} className={getButtonClass('copy')}>文案寫作 (Copy)</button>
                    <button onClick={() => handleFilter('ai')} className={getButtonClass('ai')}>AI 創作 (AI Tools)</button>
                </div>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredWorks.map((work) => (
                    <div key={work.id} className="group project-card cursor-pointer animate-fade-in">
                        {/* Image Container */}
                        <div 
                            className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 mb-4 aspect-[4/3] relative bg-gray-100"
                            onClick={() => setSelectedImage(work.imageUrl)}
                        >
                            <img 
                                src={work.imageUrl} 
                                alt={work.title}
                                loading="lazy"
                                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ZoomIn className="w-4 h-4" />
                                    點擊放大
                                </span>
                            </div>
                        </div>
                        
                        {/* Info Container */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold group-hover:text-apple-blue transition-colors">{work.title}</h3>
                                <p className="text-apple-gray text-sm mt-1">{work.description}</p>
                            </div>
                            
                            {/* Arrow Button - Triggers Modal */}
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(work.imageUrl);
                                }}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors group/btn"
                                title="放大檢視"
                            >
                                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover/btn:text-apple-blue transition-colors" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal (Lightbox) */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    
                    <div 
                        className="relative max-w-5xl max-h-[90vh] w-full rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
                    >
                        <img 
                            src={selectedImage} 
                            alt="Enlarged view" 
                            className="w-full h-full object-contain max-h-[85vh] rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};