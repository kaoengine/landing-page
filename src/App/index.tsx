import * as React from "react";
import "./App.css";
import Home from "../Page/Home";
import SignInAndSignUp from "../Page/sign-in-and-sign-up/sign-in-and-sign-up";
import MenuItem from "../Components/Shared/Navbar/MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <div className="App">
        <Router>
      <div>
        <MenuItem />

        <Switch>
        <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    </Router>

        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignInAndSignUp} />
            </Switch>
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
