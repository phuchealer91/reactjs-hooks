import React, { useState } from 'react';

function getRanDomColor() {
    const COLORS_LIST = ['green', 'blue', 'black', 'yellow'];
    let indexColor = Math.trunc(Math.random() * 5);
    return COLORS_LIST[indexColor];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initialState = localStorage.getItem('color') || 'deeppink';
        return initialState;
    });

    function onColorBoxClick() {
        const newBgColor = getRanDomColor();
        setColor(newBgColor)
        localStorage.setItem('color', newBgColor);
    }
    return (
        <div
            className="txt"
            style={{ backgroundColor: color }}
            onClick={onColorBoxClick}
        >
            Color box
        </div>
    );
}

export default ColorBox;