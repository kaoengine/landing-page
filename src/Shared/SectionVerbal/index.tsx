import React, { FunctionComponent } from "react";


type BadgetProps = {
  header: string;
  subHeader: string;
};

export const Badget: FunctionComponent<BadgetProps> = ({ header, subHeader }) => {
  return (
    <h2 className="ui header">
      {header}
     <div className="sub header">{subHeader}</div>
  </h2>
	)
};
