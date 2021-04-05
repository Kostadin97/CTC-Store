import { Route, Switch } from "react-router-dom";

import ProductsPreview from "./components/ProductsPreview/ProductsPreview";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import MyProducts from "./components/MyProducts/MyProducts";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ProductsPreview}></Route>
        <Route path="/categories/:category" component={ProductsPreview} />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/login" component={Login} />
        <Route
          path="/my-products"
          render={(props) => <MyProducts {...props} />}
        />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
