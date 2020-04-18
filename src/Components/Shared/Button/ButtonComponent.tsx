import * as React from "react";
import { Button } from "semantic-ui-react";

import './ButtonComponent.scss';
interface iState {
  buttonName: string;
  className?: string;
}
class ButtonComponent extends React.Component<iState> {
  render() {
    // const buttonStyle = {
    //   marginBottom: "1.2rem",
    //   borderRadius: "25px",
    //   fontSize: "15px",
    //   lineHeight: "15px"
    // };
    return (
      <div>
        <Button className={this.props.className} basic >
          <a href="/#" style={{ color: "#6610f2", textDecoration: "none" }}>
            {this.props.buttonName}
          </a>
        </Button>
      </div>
    );
  }
}

export default ButtonComponent;
