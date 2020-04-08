import * as React from "react";
import SectionVerbal from "../SectionVerbal";
import IconImage from "../IconImage/IconImage";
import { Tile } from "../Tiles/index";
import ImageProduct from "../ImageComponent/ImageProduct";

import { Grid } from "semantic-ui-react";
import CSS from "csstype";

class SectionAbout extends React.Component {
  render() {
    const flexContainer: CSS.Properties = {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row"
    };
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <SectionVerbal
              header={"Use your android or ios device"}
              subHeader={"to manage everything."}
            />
            <div style={flexContainer}>
              <IconImage />
              <Tile
                content={
                  "Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology."
                }
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <ImageProduct />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SectionAbout;
