import "./App.css";
import MainContent from "./MainContent";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="Content">
      <>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <MainContent />
      </>
    </div>
  );
}

export default App;