import "./App.css";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

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
      <Route path="/product-details/:id" component={ProductDetails} />
    </div>
  );
}

export default App;
