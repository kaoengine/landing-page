import * as React from "react";
import { Button } from "semantic-ui-react";
interface iState {
  buttonName: string;
}
class ButtonComponent extends React.Component<iState> {
  render() {
    const buttonStyle = {
      marginBottom: "1.2rem",
      borderRadius: "25px",
      fontSize: "15px",
      lineHeight: "15px"
    };
    return (
      <div>
        <Button basic color="purple" style={buttonStyle}>
          <a href="/#" style={{ color: "#6610f2", textDecoration: "none" }}>
            {this.props.buttonName}
          </a>
        </Button>
      </div>
    );
  }
}

export default ButtonComponent;
