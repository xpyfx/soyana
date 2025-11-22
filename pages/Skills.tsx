import React from 'react';
import { TECH_STACK, DESIGN_STACK } from '../constants';

export const Skills: React.FC = () => {
    return (
        <div className="w-full animate-fade-in py-20 bg-white min-h-screen flex flex-col justify-center">
             <div className="max-w-screen-xl mx-auto mb-16 px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">專業技能</h2>
                <p className="text-apple-gray text-lg">Technical & Design Expertise</p>
            </div>

            {/* Marquee 1: Left */}
            <div className="relative w-full mb-12 marquee-mask">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    <div className="flex gap-12 px-6 items-center">
                        {TECH_STACK.map(skill => (
                            <span key={skill} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-12 px-6 items-center">
                        {TECH_STACK.map((skill, i) => (
                            <span key={`${skill}-dup-${i}`} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                     <div className="flex gap-12 px-6 items-center">
                        {TECH_STACK.map((skill, i) => (
                            <span key={`${skill}-dup2-${i}`} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee 2: Right */}
            <div className="relative w-full marquee-mask">
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                    <div className="flex gap-12 px-6 items-center">
                        {DESIGN_STACK.map(skill => (
                            <span key={skill} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-12 px-6 items-center">
                        {DESIGN_STACK.map((skill, i) => (
                            <span key={`${skill}-dup-${i}`} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                     <div className="flex gap-12 px-6 items-center">
                        {DESIGN_STACK.map((skill, i) => (
                            <span key={`${skill}-dup2-${i}`} className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};