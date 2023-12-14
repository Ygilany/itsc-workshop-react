import { useState, useEffect } from 'react';
import { Institution } from './components/Institution';
import NavBar from './components/NavBar';
import { InputGroup, Form } from 'react-bootstrap';

function App() {
  const [institutions, setInstitutions] = useState<{ [key: string]: { name: string; website: string; img: string } }>({});

  function getAllInstitutions() {
    return fetch('http://localhost:3000/institution')
      .then(res => res.json())
      .then(setInstitutions);
  }

  useEffect(() => {
    getAllInstitutions();
  }, []);

  return (
    <>
      <NavBar />
      <h1>ITSC Workshop</h1>
      <div className="card">
        {
          Object.keys(institutions).map((key, index) => {
            return <Institution key={`person-${index}`} institution={institutions[key]} />;
          })
        }
      </div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

    </>
  );
}

export default App;
