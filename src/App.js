import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./cmps/Header";
import "./App.css";
import "./assets/style/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="main-container">
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact
                  component={route.component}
                  path={route.path}
                />
              );
            })}
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
