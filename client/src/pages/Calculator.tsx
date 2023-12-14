import { useState } from "react";
import { add, divide, multiply, subtract } from "../utility-functions";

export const CalculatorPage = () => {
    const [arg1, setArg1] = useState(0);
    const [arg2, setArg2] = useState(0);
    const [counter, setCounter] = useState(0);

    const [result, setResult] = useState<string|number>(0);
    const [operation, setOperation] = useState('?');

    const onAdd = () => {
        setResult(add(arg1, arg2));
        setOperation('+');
        setCounter(counter + 1);
    };

    const onSubtract = () => {
        const result = subtract(arg1, arg2);
        setResult(result);
        setOperation('-');
        setCounter(counter + 1);
    };

    const onMultiply = () => {
        setResult(multiply(arg1, arg2));
        setOperation('*');
        setCounter(counter + 1);
    };

    const onDivide = () => {
        setResult(divide(arg1, arg2));
        setOperation('/');
        setCounter(counter + 1);
    };

    return <>
        <h1>Calculator</h1>
        <div>
            <input type="text" placeholder="Enter first number" onChange={(e) => setArg1(Number(e.target.value))}/>

            <input type="text" placeholder="Enter second number" onChange={(e) => setArg2(Number(e.target.value))}/>

            <br />

            <button onClick={onAdd}>Add</button>
            <button onClick={onSubtract}>Subtract</button>
            <button onClick={onMultiply}>Multiply</button>
            <button onClick={onDivide}>Divide</button>

            <div>
                <h2>Result: </h2>
                <h2>{arg1}{operation}{arg2}={result}</h2>
                <br />
                <h2>Calculator has been used: {counter}</h2>
            </div>
        </div>
        </>;
};