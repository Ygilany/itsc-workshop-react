import {useState} from 'react';
import {Button} from './components/Button';
import './App.css';

function App() {
  const [counter, setCounter] = useState(40);

  function increaseStateByOne() {
    setCounter(counter => counter + 1);
}

  return (
    <>
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Add' />
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Subtract' />
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Multiply'/>
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Divide' />
      </div>
    </>
  );
}

export default App;
