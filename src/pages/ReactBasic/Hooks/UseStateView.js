import React, { useState } from 'react';

export default function UseStateView () {
    const [ text, setText ] = useState('Click me, please');
    function handleClick () {
        return setText('Thanks, been clicked!')
    }

return (
    <div>
        <h3>useState</h3>
        <button onClick={handleClick}>{text}</button>
    </div>
)
}
