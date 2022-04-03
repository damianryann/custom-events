import { EventCapture } from "./utilities/EventCapture";
import "./App.css";

const App = () => {
  const buttonTitle = "Click Me";
  const dummyProps = {
    buttonRef: "Homepage-Button",
    path: window.location.href,
    buttonTitle: buttonTitle,
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => EventCapture("buttonClick", dummyProps)}>
          {buttonTitle}
        </button>
      </header>
    </div>
  );
};

export default App;
