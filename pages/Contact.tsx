import React from 'react';
import { Mail } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <div className="w-full animate-fade-in min-h-[80vh] flex flex-col justify-center bg-apple-bg">
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">準備好開始新專案了嗎？</h2>
                <p className="text-xl text-apple-gray mb-10">歡迎隨時與我聯繫，討論您的想法。</p>
                
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-white text-apple-text border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                    發送郵件
                </a>

                <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-apple-gray text-sm w-full">
                    <p>&copy; 2023 Alex Design. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black transition-colors">Twitter</a>
                        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-black transition-colors">GitHub</a>
                    </div>
                </div>
            </section>
        </div>
    );
};