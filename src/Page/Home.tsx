import React, { Fragment, ReactElement } from "react";
import DesktopStackLayout from "../Layout/desktop-stack.layout";
import MenuItem from "../Components/Shared/Navbar/MenuItem";
import SectionAbout from "../Components/Section/SectionAbout/SectionAbout";
import SectionFeatures from "../Components/Section/SectionFeatures/SectionFeatures";
import PricingComponent from "../Components/Section/PricingComponent/PricingComponent";
import LatestNewsComponent from "../Components/Section/LatestNewsComponent/LatestNewsComponent";
import SubmitForm from "../Components/Section/SubmitForm/InputForm";
import Footer from "../Components/Section/Footer/Footer";
import { LayoutItemType, KaoComponent } from "../Types/LayoutItem";
import HeroSection from "../Components/Section/HeroSection/HeroSection";
import TeamSection from "../Components/Section/TeamSection/TeamSection";

/**
 * As clean process data 1st is define on component as []
 * then when data is bigger we can split out as module.
 */

const HomePage = () => {
  let homeComponents: Array<KaoComponent> = [
    {
      type: LayoutItemType.Section,
      component: <HeroSection />,
    },
    {
      type: LayoutItemType.SectionAbout,
      component: <SectionAbout />,
    },
    {
      type: LayoutItemType.SectionFeature,
      component: <SectionFeatures />,
    },
    {
      type: LayoutItemType.SectionPricing,
      component: <PricingComponent />,
    },
    {
      type: LayoutItemType.SectionLatestNews,
      component: <LatestNewsComponent />,
    },
    {
      type: LayoutItemType.Section,
      component: <TeamSection />,
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
