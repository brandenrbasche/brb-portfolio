import React from 'react';
import {Experience} from "@/data/experienceData";

const Card = ({ company, jobTitle, jobDescription, jobLength }: Experience) => {
    return (
        <div className='aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl bg-[gray] p-10'>
            <div className='h-[300px] w-full object-cover'>
                <h3 className='text-lg font-medium'>{company}</h3>
                <h2 className='text-2xl font-bold text-black'>{jobTitle}</h2>
                <p>{jobLength}</p>
                <p>{jobDescription}</p>
            </div>
        </div>
    );
};

export default Card;
