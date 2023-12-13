import { FC, useState } from 'react';
import './Button.css';

interface ButtonProps {
    buttonText: string;
    counter: number;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({buttonText, counter, onClick}) => {

    return <button id="my-btn" onClick={() => onClick()} >
        Count is {counter} - {buttonText}
    </button>;
};