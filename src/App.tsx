import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import Point from "./Point";
import { useEffect } from "react";

export default function App() {
  //create snake
  const blueSnake = new Snake("Blue");
  const redSnake = new Snake("Red");
  // Add Snake Tests with display below
  blueSnake.move();
  redSnake.move();

  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const bluePosition = blueSnake.getPosition();
    const redPosition = redSnake.getPosition();

    display("The Blue Snake moved to position:", bluePosition);
    display("The Red Snake moved to position:", redPosition);
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
