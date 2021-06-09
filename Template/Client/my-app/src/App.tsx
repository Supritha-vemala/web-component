import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/headers";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import { store } from "./store/store";

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/logout">
              <Logout></Logout>
            </Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
