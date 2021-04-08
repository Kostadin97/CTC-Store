import { Route, Switch } from "react-router-dom";

import ProductsPreview from "./components/ProductsPreview/ProductsPreview";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import MyProducts from "./components/MyProducts/MyProducts";
import Favourites from "./components/Favourites/Favourites";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import Header from "./components/Header/Header";

function App() {
  const isThereAUser = localStorage.getItem("token");

  const [user, setUser] = useState(isThereAUser ? true : false);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductsPreview}></Route>
          <Route path="/categories/:category" component={ProductsPreview} />
          <Route path="/details/:id" component={Details} />
          <Route path="/create" component={Create} />
          <Route path="/my-products" component={MyProducts} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
