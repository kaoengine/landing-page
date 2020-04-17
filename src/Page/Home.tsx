import React, { Fragment, ReactElement } from "react";
import DesktopStackLayout from "../Layout/desktop-stack.layout";
import Navbar from "../Components/Shared/Navbar/MenuBar";
import SectionAbout from "../Components/Section/SectionAbout/SectionAbout";
import SectionFeatures from "../Components/Section/SectionFeatures/SectionFeatures";
import PricingComponent from "../Components/Section/PricingComponent/PricingComponent";
import LatestNewsComponent from "../Components/Section/LatestNewsComponent/LatestNewsComponent";
import SubmitForm from "../Components/Section/SubmitForm/InputForm";
import Footer from "../Components/Section/Footer/Footer";
import { LayoutItemType } from "../Types/LayoutItem";

/**
 * As clean process data 1st is define on component as []
 * then when data is bigger we can split out as module.
 */

type Component = {
  type: LayoutItemType;
  component: ReactElement;
};

const HomePage = () => {
  let homeComponents: Array<Component> = [
    {
      type: LayoutItemType.Nav,
      component: <Navbar />,
    },
    // {
    //   type: LayoutItemType.Section,
    //   component: <LatestNewsComponent />,
    // },
    {
      type: LayoutItemType.sectionAbout,
      component: <SectionAbout />,
    },
    {
      type: LayoutItemType.sectionFeature,
      component: <SectionFeatures />,
    },
    {
      type: LayoutItemType.sectionPricing,
      component: <PricingComponent />,
    },
    {
      type: LayoutItemType.sectionLatestNews,
      component: <LatestNewsComponent />,
    },
    {
      type: LayoutItemType.Form,
      component: <SubmitForm />,
    },
    {
      type: LayoutItemType.Footer,
      component: <Footer />,
    },
  ];
  return (
    <Fragment>
      <DesktopStackLayout components={homeComponents} />
      {/* define the environment -> render */}
    </Fragment>
  );
};

export default HomePage;
