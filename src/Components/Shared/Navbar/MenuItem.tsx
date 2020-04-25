import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Badget, Color } from "../Badget";

const NavbarItems = [
  {name: "Home", link: "/" },
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
  { name: "Team", link: "#team"},
  { name: "Contact", link: "#contact" },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), 
  rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1)) !important;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
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
              <a href="/"><Logo /></a>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu>
            {NavbarItems.map((NavbarItem) => {
              return NavbarItem.name === "Pages" ? (
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
              ) : NavbarItem.name === "Blog" ? (
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
                // <Badget title={"New"} color={Color.Red} />
              ) : (
                    <Menu.Item className="menu-item">
                      <WrapperA href={NavbarItem.link}>{NavbarItem.name}</WrapperA>
                    </Menu.Item>
                  );
            })}
          </Menu.Menu>
        </Menu>
      </Wrapper>
    );
  }
}

export default MenuItem;
