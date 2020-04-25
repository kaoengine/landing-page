/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import { Container } from "semantic-ui-react";
import styled, { css } from "styled-components";
interface iState {
  buttonName: string;
  className?: string;
  classType?: string;
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
  cursor: pointer;
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
    ${(props: any) => 
      props.classType==='signin' && css`
        width:100%;
        border-radius: 5px;
        padding: .975rem 0.85rem;
        height: calc(2.98em + .75rem + 2px);
        line-height: inherit;
        -webkit-box-shadow: 0 20px 30px 0 rgba(67,37,204,.2);
    box-shadow: 0 20px 30px 0 rgba(67,37,204,.2);
    margin: 1rem 0;
        &&:hover{
          border-radius: 5px;
          padding: .975rem 0.85rem;
        height: calc(2.98em + .75rem + 2px);
        line-height: inherit;
        }
      `}
`;
class Button extends React.Component<iState> {
  render() {
    return (
      <Container>
        <ButtonWapper active classType={this.props.classType}>{this.props.buttonName}</ButtonWapper>
      </Container>
    );
  }
}

export default Button;
