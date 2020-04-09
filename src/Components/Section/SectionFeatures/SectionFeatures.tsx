import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardFancy from "../../Shared/CardFancy/CardFancy";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/ImageComponent/ImageProduct";

import { Grid } from "semantic-ui-react";

class SectionFeatures extends React.Component {
  state = {};
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <ImageProduct />
          </Grid.Column>
          <Grid.Column>
            <SectionVerbal
              header={"Share your photos with"}
              subHeader={"friends easily"}
            />
            <Tile
              content={
                "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively."
              }
            />
            <CardFancy />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SectionFeatures;
