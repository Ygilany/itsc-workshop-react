import {Button} from './components/Button';
import utilityFunction from './utility-functions';
import './App.css';

function App() {
  console.log(utilityFunction.add(1, 2));
  console.log(utilityFunction.subtract(1, 2));

  return (
    <>
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        <Button buttonText='Add'>
          <img src="https://camo.githubusercontent.com/af72fb10accee2e9a59efec2a0b436242fad5bb2a00ca11494e7c759834625cc/68747470733a2f2f7777772e6f736e6577732e636f6d2f696d616765732f636f6d6963732f7774666d2e6a7067" />
        </Button>
        <Button buttonText='Subtract' buttonColor='red'/>
        <Button buttonText='Multiply'/>
        <Button buttonText='Divide' />
      </div>
    </>
  );
}

export default App;
