import React, { Fragment } from "react";
import { LayoutItemType } from "../Types/LayoutItem";
import { Container } from "semantic-ui-react";

/**
 * The fixed navigation
 *
 * @version 1.0.1
 * @author [Khanh Tran](https://github.com/khanhtran8)
 */
const LayoutSegment = (componentObject: any) => {
  const { type, component } = componentObject;

  switch (type) {
    case LayoutItemType.Nav:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.sectionAbout:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.sectionFeature:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.sectionPricing:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.sectionLatestNews:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.Form:
      return <Fragment>{component}</Fragment>;
    /** SEGMENT BY DEFAULT */
    default:
      return <Fragment>{component}</Fragment>;
  }
};

/**
 * Stack Layout
 */

const DesktopStackLayout = ({ components }: any) => {
  return (
    <Fragment>
      {components.map((component: any, index: number) => (
        <Container>
          <LayoutSegment key={index} {...component}></LayoutSegment>
        </Container>
      ))}
    </Fragment>
  );
};

export default DesktopStackLayout;
