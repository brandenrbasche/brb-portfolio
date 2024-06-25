import React from 'react';
import {Container} from "./ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const AboutMe = () => {
    return (
        <Container className="z-10 relative text-4xl font-bold text-white space-y-12 max-w-[692px] py-36">
            <FadeIn>
                <p>UI-obsessed full-stack developer on the clock.</p>
            </FadeIn>
            <FadeIn>
                <p>Audiophile, concert fanatic, and DDR expert off the clock.</p>
            </FadeIn>
            <FadeIn>
                <p>Creating weird websites and loud music to entertain a restless mind.</p>
            </FadeIn>
        </Container>
    );
};

export default AboutMe;
