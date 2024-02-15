import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";

import { useEffect } from "react";

export default function App() {
  //create snake
  const blueSnake = new Snake("Blue");
  const redSnake = new Snake("Red");
  // Add Snake Tests with display below
  blueSnake.move(3);
  redSnake.move(4);
  redSnake.turn(); //snake turns backwards
  redSnake.move(3);
  blueSnake.move(4);

  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";

    display("The Blue Snake moved to position:", blueSnake.position);
    display("The Red Snake moved to position:", redSnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
