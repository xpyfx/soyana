import React, { useState } from 'react';
import { Download, Sparkles, Plus } from 'lucide-react';

interface ResumeProps {
    onOpenChat: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenChat }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full animate-fade-in">
            <section className="py-24 px-6 md:px-12 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">工作經歷</h2>
                        <p className="text-apple-gray text-lg">Professional Experience</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
                        <a href="#" className="group inline-flex items-center gap-3 bg-apple-dark text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-black">
                            <Download className="w-5 h-5 group-hover:animate-bounce" />
                            下載完整履歷 (PDF)
                        </a>
                        
                        <button onClick={onOpenChat} className="group inline-flex items-center gap-2 px-6 py-4 rounded-full text-base font-medium text-apple-text hover:bg-gray-100 transition-all">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            詢問 AI 關於我的經歷
                        </button>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                period: "2022 - Present",
                                title: "Senior Frontend Developer",
                                company: "Tech Giant Co.",
                                content: (
                                    <>
                                        <p>負責重構公司核心產品的前端架構，導入 Next.js 提升 SEO 與效能。帶領 5 人前端團隊，建立內部 UI Library，並與設計團隊緊密合作，將 Design System 落實到程式碼中。</p>
                                        <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-500">
                                            <li>提升網站載入速度 40% (LCP &lt; 1.2s)</li>
                                            <li>建立 CI/CD 自動化流程，部署時間減少 60%</li>
                                            <li>指導初階工程師技術成長，每週主持 Code Review</li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                period: "2020 - 2022",
                                title: "UI/UX Designer",
                                company: "Creative Agency",
                                content: <p>主導多個客戶的品牌重塑與網站改版專案。負責從使用者研究、Wireframe 繪製到 High-fidelity Mockup 的完整設計流程。熟悉 Figma Component Properties 與 Auto Layout。</p>
                            },
                            {
                                period: "2018 - 2020",
                                title: "Frontend Engineer",
                                company: "Startup Inc.",
                                content: <p>協助開發 SaaS 產品儀表板，使用 Vue.js 生態系。實現複雜的數據視覺化圖表（D3.js/ECharts），並優化行動裝置的使用體驗。</p>
                            }
                        ].map((item, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <button 
                                    className="w-full flex justify-between items-center py-4 text-left group hover:bg-gray-50 rounded-lg px-2 transition-colors" 
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div>
                                        <span className="text-sm text-apple-gray block mb-1 font-medium">{item.period}</span>
                                        <h3 className="text-2xl font-semibold text-apple-text group-hover:text-apple-blue transition-colors">{item.title}</h3>
                                        <span className="text-base text-gray-600">{item.company}</span>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:bg-white group-hover:shadow-md ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-400 ease-in-out px-2 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-4 pb-6 text-gray-600 leading-relaxed text-lg">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};