import {useState} from 'react';
import {Button} from './components/Button';
import './App.css';
import { Person } from './components/Person';

function App() {
  const [counter, setCounter] = useState(40);

  function increaseStateByOne() {
    setCounter(counter => counter + 1);
  }

  const personInfo = {
    name: 'Jane Doe',
    img: 'https://via.placeholder.com/150'
  };

  return (
    <>
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        <Person name={personInfo.name} img={personInfo.img} />
      </div>
      <div className="card">
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Add' />
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Subtract' />
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Multiply'/>
        <Button onClick={increaseStateByOne} counter={counter} buttonText='Divide' />
      App</div>
    </>
  );
}

export default App;
