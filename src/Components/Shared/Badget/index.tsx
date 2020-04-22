import React, { FunctionComponent } from "react";
import { Label } from "semantic-ui-react";

export enum Color {
  Red = "red",
  Orange = "orange",
  Blue = "blue",
}

type BadgetProps = {
  title: string;
  color?: Color;
};

const badgetStyle = {
  borderRadius: "30px",
};

export const Badget: FunctionComponent<BadgetProps> = ({ title, color }) => {
  return (
    <div>
      <Label style={badgetStyle} color={color}>
        {title}
        {color}
      </Label>
    </div>
  );
};
