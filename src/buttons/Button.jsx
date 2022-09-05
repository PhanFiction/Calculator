import React from 'react';
import './button.css';

export default function Buttons({buttonClick})
{
    return(
      <div className='btn-grid'>
          <button className='btn deleteBtn'>Delete</button>
          <button className='btn clearBtn'>Clear</button>

          <button className="btn ">7</button>
          <button className="btn ">8</button>
          <button className="btn ">9</button>
          <button className="btn ">/</button>

          <button className="btn ">4</button>
          <button className="btn ">5</button>
          <button className="btn ">6</button>
          <button className="btn ">x</button>

          <button className="btn ">1</button>
          <button className="btn ">2</button>
          <button className="btn ">3</button>
          <button className="btn ">-</button>

          <button className="btn ">.</button>
          <button className="btn ">0</button>
          <button className="btn ">=</button>
          <button className="btn ">+</button>

      </div>
    );
}