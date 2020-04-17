import React, { FunctionComponent } from "react";
import { Header } from "semantic-ui-react";

type SectionVerbalProps = {
  header: string;
  subHeader?: string;
};

const verbalStyle = {
  padding: "10px 0",
  textAlign: "center" as const,
};

const SectionVerbal: FunctionComponent<SectionVerbalProps> = ({
  header,
  subHeader,
}) => {
  return (
    <Header as="h2" style={verbalStyle}>
      {header}
      <Header.Subheader>{subHeader}</Header.Subheader>
    </Header>
  );
};

export default SectionVerbal;
