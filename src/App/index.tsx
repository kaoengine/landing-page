import * as React from "react";
import "./App.css";
import Home from "../Components/Page/Home";

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
      <div className="App" >
        <Home />
      </div>
    );
  }
}

export default App;
