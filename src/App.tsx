import { CSSProperties } from 'react';
import {Button} from './components/Button';
import './App.css';

function App() {

  const headerStyle: CSSProperties = {
    color: 'red',
    fontSize: '50px',
    textAlign: 'center'
  };

  return (
    <>
      <h1 style={headerStyle}>ITSC Workshop</h1>
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
