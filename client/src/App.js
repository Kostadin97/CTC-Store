import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";

import Login from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
