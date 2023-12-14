import { useState } from "react";

export const CalculatorPage = () => {
    const [arg1, setArg1] = useState(0);
    const [arg2, setArg2] = useState(0);

    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState('?');

    const add = () => {
        setResult(arg1 + arg2);
        setOperation('+');
    };

    const subtract = () => {
        const result = arg1 - arg2;
        setResult(result);
        setOperation('-');
    };

    const multiply = () => {
        setResult(arg1 * arg2);
        setOperation('*');
    };

    const divide = () => {
        setResult(arg1 / arg2);
        setOperation('/');
    };

    return <>
        <h1>Calculator</h1>
        <div>
            <input type="text" placeholder="Enter first number" onChange={(e) => setArg1(Number(e.target.value))}/>
            <input type="text" placeholder="Enter second number" onChange={(e) => setArg2(Number(e.target.value))}/>
            <br />

            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>

            <div>
                <h2>Result: </h2>
                <h2>{arg1}{operation}{arg2}={result}</h2>
            </div>
        </div>
        </>;
};