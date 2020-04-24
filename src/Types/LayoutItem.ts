import { ReactElement } from "react";

export enum LayoutItemType {
  Nav = "Nav",
  Section = "Section",
  SectionAbout = "SectionAbout",
  SectionFeature = "SectionFeature",
  SectionDownload = "SectionDownload",
  SectionPricing = "SectionPricing",
  SectionLatestNews = "SecLatestNews",
  Form = "Form",
  Footer = "Footer",
  Modal = "Modal",
}

export type KaoComponent = {
  type: LayoutItemType;
  component: ReactElement;
};
