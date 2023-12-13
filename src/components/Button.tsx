import { FC, useState } from 'react';
import './Button.css';

interface ButtonProps {
    buttonText: string;
    buttonColor?: string;
}

export const Button: FC<ButtonProps> = ({buttonText, buttonColor}) => {
    const [counter, setCounter] = useState(20);

    function increaseStateByOne() {
        setCounter(counter => counter + 1);
    }
    function increaseStateByThree() {
        increaseStateByOne();
        increaseStateByOne();
        increaseStateByOne();
    }

    return <button style={{backgroundColor: buttonColor ? buttonColor : 'blue'}} id="my-btn" onClick={() => increaseStateByThree()} >
        Count is {counter} - {buttonText}
    </button>;
};