import React from "react";
import Button from "react-bootstrap/Button";
const ButtonHandler = (props) => {
  return (
    <div>
      <Button className="outline-primary" onClick={props.useApi}>
        Click to generate a Joke
      </Button>
    </div>
  );
};
export default ButtonHandler;
