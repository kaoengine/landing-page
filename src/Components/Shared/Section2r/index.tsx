import React, { FunctionComponent } from "react";
import { Grid } from "semantic-ui-react";
import { SectionVerbal } from "../SectionVerbal";

type Section2rr23cProps = {
  header: string;
  subHeader: string;
  component: Element[];
};

export const Section2r: FunctionComponent<Section2rr23cProps> = ({ header, subHeader, component }) => {
  return (
    <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
       <SectionVerbal header={header} subHeader={subHeader} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      {component}
    </Grid.Row>
  </Grid>
  );
};
