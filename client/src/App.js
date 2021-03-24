import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./pages/Homepage/Homepage.component";

import { Login } from "./components/Login/Login.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Login} />
        {/* <Route path="/" exact component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;