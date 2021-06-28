import "./App.css";
import Home from "./components/Pages/Home";

import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home">
        <Redirect to="/" />
      </Route>
      <Route path="/" exact="true" component={Home} />
    </div>
  );
}

export default App;
