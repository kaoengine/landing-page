import React, { FunctionComponent } from "react";

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
    <h2 className="ui header" style={verbalStyle}>
      {header}
      <div className="sub header">{subHeader}</div>
    </h2>
  );
};

export default SectionVerbal;
