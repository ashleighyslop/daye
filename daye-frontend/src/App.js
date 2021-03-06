// Packages
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePanel,
} from "./views";



class App extends React.Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/" component={HomePanel} />
        </Switch>

      </Router>
    );
  }
}

export default hot(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
