import { Route, Switch } from "react-router-dom";

import ProductsPreview from "./components/ProductsPreview/ProductsPreview";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import MyProducts from "./components/MyProducts/MyProducts";
import Favourites from "./components/Favourites/Favourites";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const user = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProductsPreview}></Route>
        <Route path="/categories/:category" component={ProductsPreview} />
        <Route path="/details/:id" component={Details} />
        <Route
          path="/create"
          render={(props) => <Create {...props} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/my-products"
          render={(props) => <MyProducts {...props} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/favourites"
          render={(props) => <Favourites {...props} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/edit/:id" component={Edit} />
        <Route
          path="/login"
          render={(props) => <Login {...props} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
