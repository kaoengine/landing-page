import * as React from "react";
import { Button } from "semantic-ui-react";

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

class ButtonComponent extends React.Component<iState> {
  render() {
    return (

      <ButtonWapper>  
        <Button basic className="kao-buton">
          <a href="/#">{this.props.buttonName}</a>
        </Button>
      </ButtonWapper>
    );
  }
}

export default ButtonComponent;
