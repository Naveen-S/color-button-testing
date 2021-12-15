import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(true);
  const cls = color ? { backgroundColor: 'red' } : { backgroundColor: 'blue' };
  const text = color ? 'Change to blue' : 'Change to red';
  return (
    <div className='App'>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'>
        Learn React
      </a>
      <button
        onClick={() => {
          setColor(prev => !prev);
        }}
        style={{ ...cls }}>
        {text}
      </button>
    </div>
  );
}

export default App;
