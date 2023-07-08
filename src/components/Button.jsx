import { styled } from "styled-components";
import React from 'react';

function StButton({size, color, name, onClick, icon}) {

    const Button = styled.button`
    ${() => colorHandler(color)};
    ${() => sizeHandler(size)};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    &:active {
      filter: brightness(70%);
    }
    `;

    const sizeHandler = (size) => {
        switch (size) {
        case 'large':
            return `width: 200px; height: 50px; background-color: white; font-weight: 600;`;
        case 'medium':
            return `width: 130px; height: 45px;`;
        default:
            return `width: 100px; height: 40px;`;
        }
    };

    const colorHandler = (color) => {
        switch (color) {
        case 'negative':
            return `border: 3px solid rgb(250, 177, 160); color: rgb(214, 48, 49); background-color: rgb(250, 177, 160)`;
        default:
            return `border: 3px solid rgb(85, 239, 196); background-color: rgb(85, 239, 196)`;
        }
    };

    return(
        <Button onClick={onClick}>{ name }&nbsp;{ icon }</Button>
    )
    }

export default StButton
