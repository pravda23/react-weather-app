import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mainContent">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
