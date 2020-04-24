import React, { FunctionComponent } from "react";
import { Header } from "semantic-ui-react";
import { Color } from "../../Shared/Badget";
type SectionVerbalProps = {
  header: string;
  subHeader?: string;
  Color?: Color;
};

const verbalStyle = {
  padding: "10px 0",
  textAlign: "left" as const,
};

const SectionVerbal: FunctionComponent<SectionVerbalProps> = ({
  header,
  subHeader,
  Color,
}) => {
  return (
    <Header as="h2" color={Color}>
      {header}
      <Header.Subheader style={verbalStyle}>{subHeader}</Header.Subheader>
    </Header>
  );
};

export default SectionVerbal;
