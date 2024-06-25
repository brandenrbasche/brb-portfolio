'use client';

import React from 'react';
import {experiences} from "@/data/experienceData";
import Card from "@/components/ui/Card";

export const ExperienceCarousel = () => {
    const frontEndTools: string[] = ["React", "Angular", "Svelte", "TypeScript", "Next.js", "Redux", "HTML5", "CSS/Sass", "Tailwind.css", "Framer.motion", "Selenium"];
    const backEndTools: string[] = ["Node.js", "Express.js", "Java", "Docker", "PostgreSQL", "MongoDB", "AWS", "Azure"];

    return (
        <div className='bg-background pb-8 text-white'>
            <div className='overflow-clip'>
                <div className='flex gap-5 mb-5 left-1/2 -translate-x-1/2'>
                    {experiences.map((exp, index) => (
                        <Card
                            company={exp.company}
                            jobDescription={exp.jobDescription}
                            jobTitle={exp.jobTitle}
                            jobLength={exp.jobLength}
                        />
                    ))}
                </div>
                <div className='space-y-3'>
                    <SmallCarousel tools={frontEndTools}/>
                    <div className='[--duration:50s]'>
                        <SmallCarousel tools={backEndTools}/>
                    </div>
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
