import React from 'react';
import {Experience} from "@/data/experienceData";

const Card = ({ company, jobTitle, jobDescription, jobLength }: Experience) => {
    return (
        <div className='w-[60vw] shrink-0 overflow-clip rounded-2xl bg-[gray] p-10'>
            <h3 className='text-lg font-medium'>{company}</h3>
            <h2 className='text-2xl font-bold'>{jobTitle}</h2>
            <p>{jobLength}</p>
            <p>{jobDescription}</p>
        </div>
    );
};

export default Card;
