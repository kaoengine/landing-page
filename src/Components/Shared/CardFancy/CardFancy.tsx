import * as React from "react";
import IconImage from "../IconImage/IconImage";
import CSS from "csstype";

class CardFancy extends React.Component {
  public render() {
    const flexStyles: CSS.Properties = {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 -5px",
      justifyContent: "row",
    };
    return (
      <div style={flexStyles}>
        <IconImage />
        <IconImage />
        <IconImage />
        <IconImage />
      </div>
    );
  }
}

export default CardFancy;
