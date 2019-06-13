import React from "react";
import Hubble from "./Hubble";
import "./SpaceDashboard.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./Loading";
import { ThemeProvider } from "./theme";

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
            <Nav />

            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/hubble" component={Hubble} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default SpaceDashboard;
