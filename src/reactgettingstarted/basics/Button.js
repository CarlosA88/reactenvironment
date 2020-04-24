import React from "react";
import Button from "react-bootstrap/Button";

const ButtonCounter = (props) => {
  const handleClicks=()=> props.onClickFunction(props.increment)
  return (
    <div>
      <Button onClick={handleClicks}>
        +{props.increment}
      </Button>
    </div>
  );
};

export default ButtonCounter;
