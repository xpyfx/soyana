import React from 'react';

export const Marquee: React.FC = () => {
    const skillsLeft = ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Gemini API"];
    const skillsRight = ["Figma", "UI/UX", "Adobe XD", "Prototyping", "Motion", "LLM Integ."];

    const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
        <span className="text-4xl md:text-6xl font-bold text-gray-100 hover:text-black transition-colors duration-500 cursor-default whitespace-nowrap">
            {text}
        </span>
    );

    return (
        <section id="skills-section" className="py-20 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-screen-xl mx-auto mb-10 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold">專業技能</h2>
            </div>

            {/* Marquee 1: Left */}
            <div className="relative w-full mb-6 marquee-mask">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    <div className="flex gap-12 px-6 items-center">
                        {skillsLeft.map((s, i) => <MarqueeItem key={`l1-${i}`} text={s} />)}
                    </div>
                    <div className="flex gap-12 px-6 items-center">
                        {skillsLeft.map((s, i) => <MarqueeItem key={`l2-${i}`} text={s} />)}
                    </div>
                </div>
            </div>

            {/* Marquee 2: Right */}
            <div className="relative w-full marquee-mask">
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                    <div className="flex gap-12 px-6 items-center">
                        {skillsRight.map((s, i) => <MarqueeItem key={`r1-${i}`} text={s} />)}
                    </div>
                    <div className="flex gap-12 px-6 items-center">
                        {skillsRight.map((s, i) => <MarqueeItem key={`r2-${i}`} text={s} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};