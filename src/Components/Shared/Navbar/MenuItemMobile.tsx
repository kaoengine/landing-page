import React from "react";
import { Icon, Sidebar } from "semantic-ui-react";
import Logo from "../Logo/Logo";
import styled, { css } from "styled-components";

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

const WrapperContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(#6610f2, #6610f2);
  z-index: 1;
`;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  top: 0;
  left: 0;
  background: linear-gradient(#6610f2, #6610f2);
  color: #ddd;
`;
const WrapperUl: any = styled.ul`
  position: fixed;
  height: auto;
  width: 100%;
  background: #6610f2;
  list-style: none;
  margin: 45px 0;
  z-index: 1;
  ${(props: any) =>
    props.close &&
    css`
      display: none;
    `}
`;

const WrapperLi = styled.li``;

const WrapperA: any = styled.a`
  display: block;
  list-style: none;
  color: #fff;
  margin-top: 2.5em;
  transition: 0.2s;
  opacity: 0.8;
  font-size: 1rem;
  &:hover {
    color: #ffc107;
    cursor: pointer;
  }
`;

const WrapperIcon = styled.div`
  align-self: center;
`;
class MenuItemMobile extends React.Component<any, iState> {
  state: any = { visible: false };

  public handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <WrapperContainer>
        <Wrapper>
          <Logo />
          <WrapperIcon>
            <Icon
              name="sidebar"
              onClick={() => this.handleToggle()}
              style={{ transition: "all 3s ease-in-out" }}
            />
          </WrapperIcon>
        </Wrapper>
        {this.state.visible ? (
          <WrapperUl>
            {NavbarItems.map((NavbarItem) => {
              return (
                <WrapperLi>
                  <WrapperA href={NavbarItem.link}>{NavbarItem.name}</WrapperA>
                </WrapperLi>
              );
            })}
          </WrapperUl>
        ) : (
          <WrapperUl close></WrapperUl>
        )}
      </WrapperContainer>
    );
  }
}

export default MenuItemMobile;
