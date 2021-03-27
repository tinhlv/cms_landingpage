import React from 'react';
import './Radio.scss';

export const RadioButton = ({
    name,
    children,
    invalid,
    classContainer,
    ...otherProps
}) => {
    return (
        <label
            className={`radio-button ${classContainer ? classContainer : ''}`}
        >
            <input type="radio" name="name" {...otherProps} />
            {children}
            <span className={`background${invalid ? ' invalid' : ''}`}></span>
            <span className="checkmark"></span>
        </label>
    );
};

export default RadioButton;