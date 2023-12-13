import {useState} from 'react';
import {Button} from './components/Button';
import { Person } from './components/Person';
import BasicExample from './components/BasicExample';
import NavBar from './components/NavBar';

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
      <NavBar />
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        {
          personsInfo.map((person, index) => {
            return <Person key={`person-${index}`} person={person} />;
          })
        }
      </div>
      <BasicExample />
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
