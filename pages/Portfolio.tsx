import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { WORKS } from '../constants';

type FilterType = 'all' | 'web' | 'visual' | 'copy' | 'ai';

export const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredWorks = filter === 'all' 
        ? WORKS 
        : WORKS.filter(work => work.category === filter);

    return (
        <div className="w-full animate-fade-in">
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">精選作品集</h2>
                    <p className="text-apple-gray text-lg">Portfolio</p>
                </div>

                <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar px-4">
                    <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
                        {[
                            { id: 'all', label: '全部' },
                            { id: 'visual', label: '視覺設計 (Visual)' },
                            { id: 'web', label: '網頁設計 (Web)' },
                            { id: 'copy', label: '文案寫作 (Copy)' },
                            { id: 'ai', label: 'AI 創作 (AI Tools)' },
                        ].map((btn) => (
                            <button 
                                key={btn.id}
                                onClick={() => setFilter(btn.id as FilterType)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${filter === btn.id ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredWorks.map((work) => (
                        <div key={work.id} className="group cursor-pointer animate-fade-in">
                            <div className={`overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 mb-4 aspect-[4/3] relative ${work.bgColor || 'bg-white'}`}>
                                <div className={`w-full h-full flex flex-col items-center justify-center text-center p-6 transition-transform duration-700 ease-out group-hover:scale-105 ${!work.bgColor ? 'bg-gray-100 text-gray-400' : ''}`}>
                                    {work.category === 'ai' && (
                                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                                            <Sparkles className="w-6 h-6 text-purple-500" />
                                        </div>
                                    )}
                                    {work.category === 'ai' ? (
                                        <>
                                            <h4 className="font-semibold text-lg mb-1 text-gray-800">{work.imageText}</h4>
                                            <p className="text-sm text-gray-500 mb-4">Prompting & Generative Art</p>
                                            <span className="text-xs px-3 py-1 bg-white rounded-full border border-gray-200 text-gray-600">Interactive Demo Inside</span>
                                        </>
                                    ) : (
                                        <span className={work.bgColor ? 'text-gray-400' : 'text-sm'}>{work.imageText}</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-apple-blue transition-colors">{work.title}</h3>
                                    <p className="text-apple-gray text-sm mt-1">{work.subtitle}</p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-apple-blue transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};