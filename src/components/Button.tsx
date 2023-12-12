import { useState } from 'react';

interface ButtonProps {
    buttonText?: string;
}

function Button(props: ButtonProps) {
    const [ counter, setCounter ] = useState(0);

    function increaseStateByOne() {
        setCounter(counter + 1);
    }

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '20px',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px'
    };

    return <button
        style={buttonStyle}
        onClick={() => increaseStateByOne()}
    >
        Count is {counter} - {props.buttonText}
    </button>;
}
export { Button };