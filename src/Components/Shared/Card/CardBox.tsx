import * as React from "react";

import Card from "./Card";
import HeaderTitle from "../Header/HeaderTitle";
import ImageProduct from "../Image";

class CardBox extends React.Component {
  public render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <HeaderTitle />
        <div>
          <Card />
        </div>

        <ImageProduct />
      </div>
    );
  }
}

export default CardBox;
