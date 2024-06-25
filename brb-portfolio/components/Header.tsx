import React from 'react';
import {Container} from "./ui/Container";
import Button from "@/components/ui/Button";

const Header = () => {
    return (
        <>
            <header className='bg-backgroundContrast text-white'>
                <Container className='flex items-center min-h-11'>
                    <a href='/' className='flex items-center px-6 -ml-6'>brb.codes</a>
                </Container>
            </header>
            <div className='bg-backgroundContrast sticky top-0 text-white'>
                <Container className='flex min-h-11 items-center justify-between'>
                    <p>Branden Basche</p>
                    <Button>test</Button>
                </Container>
            </div>
        </>
    );
};

export default Header;
