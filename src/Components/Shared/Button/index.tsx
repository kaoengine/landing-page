/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import { Button as _Button } from "semantic-ui-react";

import "./ButtonComponent.scss";
import styled from "styled-components";
interface iState {
  buttonName: string;
  className?: string;
}

export const ButtonWapper = styled.div`
  .ui.basic.button {
    margin-bottom: 1.2rem;
    border-radius: 25px;
    font-size: 15px;
    line-height: 15px;
    height: 40px;
  }
`
class Button extends React.Component<iState> {
  render() {
    return (
      <ButtonWapper>
        <_Button basic className="kao-buton">
          <a href="/#">{this.props.buttonName}</a>
        </_Button>
      </ButtonWapper>
    );
  }
}

export default Button;

