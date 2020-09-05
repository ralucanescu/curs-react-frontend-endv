import React from 'react';
import "./button.css";

const ButtonComponent = ({className, buttonTitle, handleClick}) => {
    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {buttonTitle}
        </button>
    )
}

export default ButtonComponent;