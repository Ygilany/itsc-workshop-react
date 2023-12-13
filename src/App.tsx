import {Button} from './Button';
import utilityFunction from './utility-functions';
import './App.css';

function App() {
  console.log(utilityFunction.add(1, 2));
  console.log(utilityFunction.subtract(1, 2));

  return (
    <>
      <h1 className="new-header">ITSC Workshop</h1>
      <div className="card">
        <Button buttonText='Hi'/>
        <Button />
        <Button buttonText='Hello'/>
        <Button />
      </div>
    </>
  );
}

export default App;
