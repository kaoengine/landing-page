import * as React from "react";
import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
import "../App.css";

import MenuBar from "./Navbar/MenuBar";
import Home from "../Page/Home";

type iState = {
  visible: boolean;
};
class App extends React.Component<any, iState> {
  state: iState = { visible: false };

  public handleSidebarToggle = (bolValue: boolean) => {
    this.setState({ visible: !bolValue });
  };
  public render() {
    const { visible } = this.state;
    return (
      <div className="App">
        <Home activeIndex></Home>
        <Icon name="bars" onClick={() => this.handleSidebarToggle(visible)} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            icon="labeled"
            inverted
            onHide={event => this.handleSidebarToggle}
            vertical
            visible={visible}
            width="thin"
          >
            {/* no Idea how to style and put component MenuItem Navbar */}
            <MenuBar />
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          {/* overlay the content */}
          {/* <Sidebar.Pusher>
            <Segment basic>
              <LatestNewsComponent />
            </Segment>
          </Sidebar.Pusher> */}
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
