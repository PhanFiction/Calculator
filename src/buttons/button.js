import React from 'react';
import './button.css';

export default function Button({buttonClick})
{
    return(
    <span className="numpad-wrapper">
        <span className="numpad-top">
            <button className="top-three" name="clear" value="" onClick={buttonClick}>AC</button>
            <button className="top-three" name="plus-minus" onClick={buttonClick}>&#43;/&#8722;</button>
            <button className="top-three" name="percentage" onClick={buttonClick}>&#37;</button>
            <button className="operators" name="div" value="" onClick={buttonClick}>&divide;</button>
            <button name="7" value="7" onClick={buttonClick}>7</button>
            <button name="8" value="8" onClick={buttonClick}>8</button>
            <button name="8" value="9" onClick={buttonClick}>9</button>
            <button className="operators" name="times" value="" onClick={buttonClick}>&times;</button>
            <button name="4" value="4" onClick={buttonClick}>4</button>
            <button name="5" value="5" onClick={buttonClick}>5</button>
            <button name="6" value="6" onClick={buttonClick}>6</button>
            <button className="operators" name="sub" value="" onClick={buttonClick}>&ndash;</button>
            <button name="1" value="1" onClick={buttonClick}>1</button>
            <button name="2" value="2" onClick={buttonClick}>2</button>
            <button name="3" value="3" onClick={buttonClick}>3</button>
            <button className="operators" name="add" value="" onClick={buttonClick}>+</button>
        </span>
        <span className="numpad-bot">
            <button className="zero" name="0" value="0" onClick={buttonClick}>0</button>
            <button name="." value="." onClick={buttonClick}>.</button>
            <button className="operators" name="equal" value="" onClick={buttonClick}>=</button>
        </span>
    </span>
    );
}