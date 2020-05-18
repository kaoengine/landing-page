/* eslint-disable react/jsx-pascal-case */
import * as React from "react";

import { Icon } from "semantic-ui-react";
import styled, { css } from "styled-components";

export enum Icons {
  Android = "android",
  Apple = "apple",
}
interface iState {
  buttonName: string;
  className?: string;
  Icons?: Icons;
  classType?: string;
  onHandleClick?: any;
}

const Wrapper = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
`;

const StyledButton: any = styled.button`
  border-radius: 25px;
  font-size: 15px;
  line-height: 15px;
  color: #6730e3;
  display: inline-block;
  padding: 10px 25px;
  margin-right: 1rem;
  border: 1px solid #6730e3;
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
    const { buttonName, Icons, onHandleClick } = this.props;
    return (
      <Wrapper>
        <StyledButton>
          <Icon name={Icons} onClick={onHandleClick}>
            {buttonName}
          </Icon>
        </StyledButton>
      </Wrapper>
    );
  }
}

export default Button;
