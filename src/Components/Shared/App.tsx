import * as React from "react";
import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer/Footer";
import CardBox from "./Card/CardBox";
import CardFancy from "./CardFancy/CardFancy";
import Carousel from "./Carousel/Carousel";
import InputForm from "./SubmitForm/InputForm";
import MenuBar from "./Navbar/MenuBar";

type iState = {
  visible: boolean;
};
class App extends React.Component<any, iState> {
  state: iState = { visible: false };

  public handleSidebarToggle = (bolValue: any) => {
    if (bolValue === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };
  public render() {
    const { visible } = this.state;
    return (
      <div className="App">
        <Icon name="bars" onClick={() => this.handleSidebarToggle(visible)} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            icon="labeled"
            inverted
            onHide={this.handleSidebarToggle}
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
          <Sidebar.Pusher>
            <Segment basic>
              <Footer />
              <CardBox />
              <CardFancy />
              <Carousel />
              <InputForm />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <MenuBar />
      </div>
    );
  }
}

export default App;
