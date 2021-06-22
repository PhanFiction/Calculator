import React from 'react';
import './screen.css';

export default function Screen({value, handleClick})
{
    return(
        <div className="screen-wrapper">
            <form>
                <input type="text" value={value} onChange={handleClick}/>
            </form>
        </div>
    );
}