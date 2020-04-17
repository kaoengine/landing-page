import { ReactElement } from "react";

export enum LayoutItemType {
  Nav = "nav",
  Section = "sec",
  sectionAbout = "secAbout",
  sectionFeature = "secFeature",
  sectionPricing = "secPricing",
  sectionLatestNews = "secLatestNews",
  Form = "form",
  Footer = "foo",
  Modal = "mod",
}

export type KaoComponent = {
  type: LayoutItemType;
  component: ReactElement;
};

