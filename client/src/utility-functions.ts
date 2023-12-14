const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number | string => {
    if(b === 0) {
        return `Cannot divide by 0`;
    }
    return a / b;
};

export { add, subtract, multiply, divide };