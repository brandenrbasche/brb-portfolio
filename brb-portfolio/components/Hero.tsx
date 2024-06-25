"use client";

import React, { useRef } from 'react';
import {Container} from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const bgContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: bgContainerRef,
        offset: ["start start", "end end"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

    return (
        <div className='relative bg-background text-white'>
            <motion.div
                style={{ opacity }}
                className='absolute -top-[--header-height] h-[200vh] left-0 w-full'
                ref={bgContainerRef}
            >
                {/*<img*/}
                {/*    className='sticky top-0 h-screen object-cover'*/}
                {/*    src='/posters/abstract-bg.jpg' alt='abstract hero background'*/}
                {/*/>*/}
            </motion.div>
            <Container className='relative z-10 pb-7 h-[--hero-height]'>
                <motion.div
                    className='flex flex-col items-start justify-end h-full'
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    whileInView="visible"
                    viewport={{ amount: 0.98 }}
                    exit="hidden"
                    animate="hidden"
                >
                    <h1 className='text-5xl font-bold mb-10'>Full-stack engineer crafting experiences for the web.<br/>Based
                        in NYC.</h1>
                    <Button className='mb-16' size='large'>Large button</Button>
                    <p className='font-semibold'>Connect with me.</p>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;
