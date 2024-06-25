import React from 'react';
import {Container} from "./ui/Container";
import Button from "@/components/ui/Button";

const Header = () => {
    return (
        <>
            <header className='bg-backgroundContrast text-white'>
                <Container className='flex items-center min-h-[--header-row-height]'>
                    <a href='/' className='-ml-6 flex h-[--header-row-height] items-center px-6 text-lg'>brb.codes</a>
                </Container>
            </header>
            <div className='bg-backgroundContrast sticky top-0 text-white z-20'>
                <Container className='flex min-h-[--header-row-height] items-center justify-between'>
                    <p className='text-xl font-semibold'>Branden Basche</p>
                    <Button size='small'>Let's connect</Button>
                </Container>
            </div>
        </>
    );
};

export default Header;
