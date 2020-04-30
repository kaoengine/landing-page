import React, { Fragment } from "react";
import { Sticky } from "semantic-ui-react";
import { LayoutItemType, KaoComponent } from "Types/LayoutItem";

/**
 * The fixed navigation
 *
 * @version 1.0.1
 * @author [Khanh Tran](https://github.com/khanhtran8)
 */

const LayoutLogic: any = {
  [LayoutItemType.SideBar]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.SectionAbout]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.SectionFeature]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.SectionDownload]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.SectionPricing]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.SectionLatestNews]: (component: any) => (
    <Fragment>{component}</Fragment>
  ),
  [LayoutItemType.Form]: (component: any) => <Fragment>{component}</Fragment>,
};

const MobileLayoutSegment = ({ type, component }: KaoComponent) =>
  LayoutLogic[type] ? (
    LayoutLogic[type](component)
  ) : (
    <Fragment>{component}</Fragment>
  );
/**
 * Stack Layout
 */

const MobileLayout = ({ components }: any) => {
  return (
    <Fragment>
      {components.map((component: any) => (
        <MobileLayoutSegment {...component} />
      ))}
    </Fragment>
  );
};

export default MobileLayout;
