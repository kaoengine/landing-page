import React from "react";
import {
  Icon,
  Menu,
  Segment,
  Sidebar,
  Container,
  Responsive,
} from "semantic-ui-react";
import Logo from "../Logo/Logo";

const NavbarItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Features", link: "#feature" },
  { name: "Pricing", link: "#pricing" },
  { name: "Screenshots", link: "#news" },
  {
    name: "Pages",
    subMenu: [
      {
        signIn: "SignIn",
      },
    ],
  },
  { name: "Blog" },
  { name: "Team", link: "#team" },
  { name: "Contact", link: "#contact" },
];

type iState = {
  visible: boolean;
};
class MenuItemMobile extends React.Component<any, iState> {
  state: any = { visible: true };

  public handleSidebarHide = () => {
    this.setState({ visible: false });
  };
  public handleToggle = () => {
    this.setState({ visible: true });
  };
  render() {
    const { visible } = this.state;
    return (
      <Responsive as={Sidebar.Pushable}>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={() => this.handleSidebarHide()}
          visible={visible}
          vertical
          width="thin"
        >
          {NavbarItems.map((NavbarItem) => {
            return <Menu.Item as="a">{NavbarItem.name}</Menu.Item>;
          })}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as="a" inverted position="left">
                  <Logo />
                </Menu.Item>
                <Menu.Item
                  as="a"
                  onClick={() => this.handleToggle()}
                  style={{ alignSelf: "auto" }}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default MenuItemMobile;
