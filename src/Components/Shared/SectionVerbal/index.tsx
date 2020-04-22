import React, { FunctionComponent } from "react";
import { Header } from "semantic-ui-react";

type SectionVerbalProps = {
  header: string;
  subHeader?: string;
};

const verbalStyle = {
  padding: "10px 0",
  textAlign: "left" as const,
};

const SectionVerbal: FunctionComponent<SectionVerbalProps> = ({
  header,
  subHeader,
}) => {
  return (
    <Header as="h2">
      {header}
      <Header.Subheader style={verbalStyle}>{subHeader}</Header.Subheader>
    </Header>
  );
};

export default SectionVerbal;
