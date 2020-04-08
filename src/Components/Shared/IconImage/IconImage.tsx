import * as React from "react";
import { Image } from "semantic-ui-react";
import CSS from "csstype";

class IconImage extends React.Component {
  public render() {
    const iconStyle: CSS.Properties = {
      padding: "15px",
      border: "none",
      width: "65px",
      height: "65px",
      boxShadow: "0 30px 40px 0 rgba(52,27,159,.1)",
      margin: "10px"
    };
    return (
      <div style={iconStyle}>
        <Image src="/img/image-icon-1.png" />
      </div>
    );
  }
}

export default IconImage;
