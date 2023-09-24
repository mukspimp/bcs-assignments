import logo from "./logo.svg";
import "./App.css";
import Assignement1 from "./components/assignment1/AssignmentNo1";
import Assignement2 from "./components/assignment2/AssignmentNo2";
import Assignement4 from "./components/assignment4/AssignmentNo4";
import Assignement5 from "./components/assignment5/AssignmentNo5";
import Assignement6 from "./components/assignment6/AssignmentNo6";
import Assignement7 from "./components/assignment7/AssignmentNo7";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Assignments</p>
      </header>
      <body>
        <Assignement1 />
        <Assignement2 />
        <Assignement4 />
        <Assignement5 />
        <Assignement6 />
        <Assignement7 />
      </body>
    </div>
  );
}

export default App;
