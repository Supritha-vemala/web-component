import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookMarks from "./components/BookMarks";
import Header from "./components/headers";
import Home from "./components/home";
import { IDPage } from "./components/IDPage";
import Login from "./components/login";
import Logout from "./components/logout";
import MovieListPage from "./components/movieListPage";
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
            <Route exact path="/movies/:imdbid">
              <IDPage></IDPage>
            </Route>
            <Route exact path="/search">
              <MovieListPage></MovieListPage>
            </Route>
            <Route exact path="/mybookmarks">
              <BookMarks></BookMarks>
            </Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
