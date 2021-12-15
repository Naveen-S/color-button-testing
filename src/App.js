import './App.css';
import React, { useState } from 'react';
import cx from 'classnames';

function App() {
  const [color, setColor] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const cls = checkbox
    ? { backgroundColor: 'gray' }
    : color
    ? { backgroundColor: 'red' }
    : { backgroundColor: 'blue' };
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
        onClick={() => {
          setColor(prev => !prev);
        }}
        style={{ ...cls }}
        disabled={checkbox}>
        {text}
      </button>
      <div className='margin'>
        <input
          id='disable-btn-checkbox'
          type='checkbox'
          onChange={() => {
            setCheckbox(prev => !prev);
          }}
        />
        <label htmlFor='disable-btn-checkbox'>Disable Button</label>
      </div>
    </div>
  );
}

export default App;
