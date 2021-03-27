import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Create from "./components/Create/Create";

import { Login } from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
