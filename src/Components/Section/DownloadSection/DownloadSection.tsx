import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";
import Button from "../../Shared/Button";
import { Grid, Icon } from "semantic-ui-react";

class DownloadSection extends React.Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <SectionVerbal
              header={"Start Managing your apps business, more faster"}
            />
            <Tile
              content={
                "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively."
              }
            />
            <div style={{ display: "flex", marginTop: "100px" }}>
              <Icon name="android" size="big" />
              <Button buttonName="Google Play" />
              <Icon name="apple" size="big" />
              <Button buttonName="App Store" />
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

export default DownloadSection;
