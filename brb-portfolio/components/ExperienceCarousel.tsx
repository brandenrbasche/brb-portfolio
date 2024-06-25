'use client';

import React, {useMemo, useRef} from 'react';
import {experiences} from "@/data/experienceData";
import Card from "@/components/ui/Card";
import {motion, useScroll, useTransform} from "framer-motion";
import { useWindowSize } from "react-use";

export const ExperienceCarousel = () => {
    const { width, height } = useWindowSize();
    const frontEndTools: string[] = ["React", "Angular", "Svelte", "TypeScript", "Next.js", "Redux", "HTML5", "CSS/Sass", "Tailwind.css", "Framer.motion", "Selenium"];
    const backEndTools: string[] = ["Node.js", "Express.js", "Java", "Docker", "PostgreSQL", "MongoDB", "AWS", "Azure"];

    const carouselWrapperRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ["start start", "end start"]
    });

    const maximumScale = useMemo(() => {
        const windowYRatio = height / width;
        const xScale = 1.667;
        const yScale = xScale * (16 / 9) * windowYRatio;
        return Math.max(yScale, yScale);
    }, [width, height]);

    const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maximumScale * 1.1, maximumScale, 1])

    const cardOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
    const cardOpacityTranslateLeft = useTransform(scrollYProgress, [0.64, 0.66], [-20, 0]);
    const cardOpacityTranslateRight = useTransform(scrollYProgress, [0.64, 0.66], [20, 0]);

    return (
        <div className='bg-background pb-8 text-white'>
            <div
                className='overflow-clip h-[300vh] mt-[-100vh]'
                ref={carouselWrapperRef}
            >
                <div className='sticky top-0 flex h-screen items-center'>
                    {/*MAIN CAROUSEL*/}
                    <div className='relative left-1/2 mb-5 flex -translate-x-1/2 gap-5'>
                        {/*FIRST CARD*/}
                        <motion.div
                            style={{opacity: cardOpacity, x: cardOpacityTranslateLeft}}
                        >
                            <Card
                                company={experiences[0].company}
                                jobDescription={experiences[0].jobDescription}
                                jobTitle={experiences[0].jobTitle}
                                jobLength={experiences[0].jobLength}
                            />
                        </motion.div>
                        {/*MIDDLE CARD*/}
                        <motion.div
                            style={{ scale }}
                        >
                            <Card
                                company={experiences[1].company}
                                jobDescription={experiences[1].jobDescription}
                                jobTitle={experiences[1].jobTitle}
                                jobLength={experiences[1].jobLength}
                            />
                        </motion.div>
                        {/*LAST CARD*/}
                        <motion.div
                            style={{ opacity: cardOpacity, translate: cardOpacityTranslateRight }}
                        >
                            <Card
                                company={experiences[2].company}
                                jobDescription={experiences[2].jobDescription}
                                jobTitle={experiences[2].jobTitle}
                                jobLength={experiences[2].jobLength}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='space-y-3 mt-[-125px]'>
                <SmallCarousel tools={frontEndTools}/>
                <div className='[--duration:50s]'>
                    <SmallCarousel tools={backEndTools}/>
                </div>
            </div>
        </div>
    );
};

type Tools = {
    tools: string[];
}

const SmallCarousel = ({tools}: Tools) => {
    return (
        <div className='overflow-clip'>
            <div className='flex gap-3 animate-infinite-scroll'>
                {tools.map((tool, index) => (
                    <div className='bg-[lightgray] rounded-xl w-[23vw] h-[100px] shrink-0' key={index}>
                        <p className='w-full h-full object-cover rounded-xl items-center justify-center flex'>{tool}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default ExperienceCarousel;
