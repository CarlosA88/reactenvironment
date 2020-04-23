import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonCounter = (props) => {
    return (
        <div>
            <Button onClick={props.onClickFunction}>+{props.increment}</Button>

        </div>
    );
};

export default ButtonCounter;