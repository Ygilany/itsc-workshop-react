import {useState} from 'react';
import {Button} from './components/Button';
import './App.css';
import { Person } from './components/Person';

function App() {
  const [counter, setCounter] = useState(40);

  function increaseStateByOne() {
    setCounter(counter => counter + 1);
  }

  const personsInfo = [{
    name: 'John Doe',
    img: 'https://via.placeholder.com/150',
    age: 20,
    address: '123 Main St.',
    phone: '555-555-5555',
    email: 'yashy@kjasgdfk.com',
    hobbies: ['running', 'swimming', 'cycling']
  }, {
    name: 'Jane Doe',
    img: 'https://via.placeholder.com/150',
    age: 20,
    address: '123 Main St.',
    phone: '555-555-5555',
    email: 'yashy@kjasgdfk.com',
    hobbies: ['running', 'swimming', 'cycling']
  }, {
    name: 'Sally Doe',
    age: 20,
    address: '123 Main St.',
    phone: '555-555-5555',
    email: 'yashy@kjasgdfk.com',
    hobbies: ['running', 'swimming', 'cycling']
  }];


  return (
    <>
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        {
          personsInfo.map((person, index) => {
            return <Person key={`person-${index}`} person={person} />;
          })
        }
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
