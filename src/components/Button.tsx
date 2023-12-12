import { useState } from 'react';

function Button() {
    const [ buttonText, setButtonText ] = useState('Click me, please');

    function greet() {
        console.log('Hello');
        setButtonText('Hello');
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
        onClick={() => greet()}
    >
        {buttonText}
    </button>;
}
export { Button };