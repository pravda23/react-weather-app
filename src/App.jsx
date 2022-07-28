import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mainContent">
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
