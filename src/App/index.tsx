import * as React from "react";
import "./App.css";
import Home, { homeComponents } from "../Page/Home";
import SignInAndSignUp from "../Page/sign-in-and-sign-up/sign-in-and-sign-up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuContainer from "Components/Shared/Navbar/MenuContainer";
import TestingRouter from "Components/TestingRouter";

type iState = {
  visible: boolean;
};

class App extends React.Component<any, iState> {
  state: iState = { visible: false };

  public handleSidebarToggle = (bolValue: boolean) => {
    this.setState({ visible: !bolValue });
  };

  public render() {
    return (
      <Router>
        <MenuContainer {...homeComponents} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route exact path="/purchase" component={TestingRouter}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
