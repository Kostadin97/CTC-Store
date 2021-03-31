import { Route, Switch } from "react-router-dom";

import ProductsPreview from "./components/ProductsPreview/ProductsPreview";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import "./App.css";

function App() {
  const user = localStorage.getItem("token");
  const isLoggedIn = user ? true : false;
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={ProductsPreview} />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route
          path="/login"
          render={(props) => <Login {...props} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;