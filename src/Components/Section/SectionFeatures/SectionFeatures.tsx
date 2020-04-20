import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardFancy from "../../Shared/CardFancy/CardFancy";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/ImageComponent/ImageProduct";

import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const Wrapper = styled.div`
  background: #ddd;
  padding: 100px;
`;

class SectionFeatures extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column computer={5}>
              <ImageProduct />
            </Grid.Column>
            <Grid.Column computer={11}>
              <SectionVerbal
                header={"Share your photos with"}
                subHeader={"friends easily"}
              />
              <Tile
                content={
                  "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively."
                }
              />
              <Tile
                content={
                  "Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and."
                }
              />
              <CardFancy />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default SectionFeatures;
