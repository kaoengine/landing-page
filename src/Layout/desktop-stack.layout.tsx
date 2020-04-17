import React, { Fragment } from "react";
import { LayoutItemType, KaoComponent } from "../Types/LayoutItem";
import { Container, Sticky } from "semantic-ui-react";
import * as _ from "lodash";
import {  } from "../";
/**
 * The fixed navigation
 *
 * @version 1.0.1
 * @author [Khanh Tran](https://github.com/khanhtran8)
 */
const layoutLogic: any = {
  [LayoutItemType.Nav]:               (component: any) => <Sticky>{component}</Sticky>,
  [LayoutItemType.SectionAbout]:      (component: any) => <Fragment>{component}</Fragment>,
  [LayoutItemType.SectionFeature]:    (component: any) => <Fragment>{component}</Fragment>,
  [LayoutItemType.SectionPricing]:    (component: any) => <Fragment>{component}</Fragment>,
  [LayoutItemType.SectionLatestNews]: (component: any) => <Fragment>{component}</Fragment>,
  [LayoutItemType.Form]:              (component: any) => <Fragment>{component}</Fragment>
}
const LayoutSegment = ({type, component}: KaoComponent) => _.get(layoutLogic, type, layoutLogic.Form)(component); 

const LayoutSegmentStupid = ({type, component}: KaoComponent) => {

  switch (type) {
    case LayoutItemType.Nav:
      return <Sticky>{component}</Sticky>;
    case LayoutItemType.SectionAbout:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.SectionFeature:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.SectionPricing:
      return <Fragment>{component}</Fragment>;
    case LayoutItemType.SectionLatestNews:
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
      {components.map((component: any) => (
        <Container>
          <LayoutSegment {...component}></LayoutSegment>
        </Container>
      ))}
    </Fragment>
  );
};

export default DesktopStackLayout;
