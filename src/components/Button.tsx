import { useState } from 'react';
import './Button.css';

interface ButtonProps {
    buttonText: string;
    buttonColor?: string;
}

function Button({buttonText, buttonColor}: ButtonProps) {
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
}
export { Button };