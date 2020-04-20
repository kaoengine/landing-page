import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import IconImage from "../../Shared/IconImage/IconImage";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/ImageComponent/ImageProduct";

import { Grid, Container } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: url("/img/about-bg-shape.svg");
  // background-repeat: no-repeat;
  // background-size: cover;
  // padding-top: 5em;
  // padding: 10em;
  //component layout is broken
`;

class SectionAbout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Grid.Row>
                  <SectionVerbal
                    header={"Use your android or ios device"}
                    subHeader={"to manage everything."}
                  />
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column computer={4}>
                    <IconImage />
                  </Grid.Column>
                  <Grid.Column computer={12}>
                    <Tile
                      content={
                        "Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology."
                      }
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <ImageProduct />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default SectionAbout;
