import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import ProductsPreview from "./components/ProductsPreview/ProductsPreview";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";

import Login from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import "./App.css";

function App() {
  const user = localStorage.getItem("token");
  const isThereAUser = user ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(isThereAUser);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => (
            <ProductsPreview isLoggedIn={isLoggedIn} />
          )}
        />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={Create} />
        <Route path="/login" render={() => <Login isLoggedIn={isLoggedIn} />} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
