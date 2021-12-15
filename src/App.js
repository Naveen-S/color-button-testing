import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const cls = color ? { backgroundColor: 'red' } : { backgroundColor: 'blue' };
  const text = color ? 'Change to blue' : 'Change to red';
  return (
    <div className='App'>
      <div className='margin'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </div>

      <button
        className='btn'
        onClick={() => {
          setColor(prev => !prev);
        }}
        style={{ ...cls }}
        disabled={checkbox}>
        {text}
      </button>
      <div className='margin'>
        <input
          type='checkbox'
          onChange={() => {
            setCheckbox(prev => !prev);
          }}
        />
      </div>
    </div>
  );
}

export default App;
