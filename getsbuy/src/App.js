import "./App.css";
import Home from "./components/Pages/Home";
import Signup from "./components/Pages/Signup";
import Signin from "./components/Pages/Signin";

import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/home">
        <Redirect to="/" />
      </Route>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
    </div>
  );
}

export default App;
