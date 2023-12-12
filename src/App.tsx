import { useState, CSSProperties } from 'react';
import {Button} from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const headerStyle: CSSProperties = {
    color: 'red',
    fontSize: '50px',
    textAlign: 'center'
  };

  return (
    <>
      <h1 style={headerStyle}>ITSC Workshop</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
      </div>
    </>
  );
}

export default App;
