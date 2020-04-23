/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import { Container } from "semantic-ui-react";

// import "./ButtonComponent.scss";
import styled, { css } from "styled-components";
interface iState {
  buttonName: string;
  className?: string;
}

const ButtonWapper: any = styled.div`
  border-radius: 25px;
  font-size: 15px;
  line-height: 15px;
  color: #6730e3;
  display: inline-block;
  padding: 10px 25px;
  border: 2px solid #6730e3;
  text-align: center;
  &:hover {
    background: #6730e3;
    color: #fff;
    outline: none;
  }
  ${(props: any) =>
    props.active &&
    css`
      background: #6730e3;
      color: #fff;
      outline: none;
      &:hover {
        border-radius: 25px;
        font-size: 15px;
        line-height: 15px;
        color: #6730e3;
        display: inline-block;
        padding: 10px 25px;
        border: 2px solid #6730e3;
        text-align: center;
        background: #ffff;
      }
    `}
`;
class Button extends React.Component<iState> {
  render() {
    return (
      <Container>
        <ButtonWapper active>{this.props.buttonName}</ButtonWapper>
      </Container>
    );
  }
}

export default Button;
