import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./SpaceDashboard.css";
import { ThemeProvider } from "./theme";

import Home from "./Home";
import Nav from "./Nav";
import Loading from "./Loading";

import Hubble from "./Hubble";
import Nasa from "./Nasa";
import SpaceX from "./SpaceX";
import ISS from "./ISS";

class SpaceDashboard extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/hubble" component={Hubble} />
                  <Route exact path="/ISS" component={ISS} />
                  <Route exact path="/spaceX" component={SpaceX} />
                  <Route exact path="/nasa" component={Nasa} />
                  <Route exact path="/home" component={Home} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default SpaceDashboard;
