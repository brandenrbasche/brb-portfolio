import React from 'react';

type Props = {
    children: React.ReactNode;
}

const Button = ({ children }: Props) => {
    return (
        <button className='bg-white text-textBlack rounded-full px-3 py-1'>{children}</button>
    );
};

export default Button;
