import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Badget, Color } from "../Badget";

const NavbarItems = [
  { name: "Home" },
  { name: "About" },
  { name: "Features" },
  { name: "Pricing" },
  { name: "Screenshots" },
  {
    name: "Pages",
    subMenu: [
      {
        signIn: "SignIn",
      },
    ],
  },
  { name: "Blog" },
  { name: "Team" },
  { name: "Contact" },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #6610f2;
`;
const WrapperA = styled.a`
  list-style-type: none;
  color: #fff;
  display: inline-block;
`;
class MenuItem extends Component {
  render() {
    return (
      <Wrapper>
        <Menu secondary size="large">
          <Menu.Menu>
            <Menu.Item>
              <Logo />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu>
            {NavbarItems.map((NavbarItem) => {
              return NavbarItem.name === "Pages" ? (
                <Router>
                  <Dropdown
                    className="link item"
                    text={NavbarItem.name}
                    style={{ color: "#fff" }}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/signin">Sign In</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>Page2</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Router>
              ) : NavbarItem.name === "Blog" ? (
                <Router>
                  <Dropdown
                    className="link item"
                    text={NavbarItem.name}
                    style={{ color: "#fff" }}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item>Blog1</Dropdown.Item>
                      <Dropdown.Item>Blog2</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Badget title={"New"} color={Color.Red} />
                </Router>
              ) : (
                <Router>
                  <Menu.Item className="menu-item">
                    <WrapperA>{NavbarItem.name}</WrapperA>
                  </Menu.Item>
                </Router>
              );
            })}
          </Menu.Menu>
        </Menu>
      </Wrapper>
    );
  }
}

export default MenuItem;
