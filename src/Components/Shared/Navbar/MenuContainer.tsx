import React, { Fragment } from "react";
import MenuItemMobile from "./MenuItemMobile";
import MenuItemDesktop from "./MenuItemDesktop";
import { BrowserView, MobileView } from "react-device-detect";

class MenuContainer extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserView>
          <MenuItemDesktop />
        </BrowserView>
        <MobileView>
          <MenuItemMobile />
        </MobileView>
      </Fragment>
    );
  }
}

export default MenuContainer;
