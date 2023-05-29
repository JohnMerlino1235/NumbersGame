import * as React from "react";
import { Button } from "baseui/button";

function NumberBox() {
  const [currentNumber, setCurrentNumber] = React.useState();

  return (
    <Button onClick={() => alert("click")}>Hello</Button>
    );
}

export default NumberBox;
