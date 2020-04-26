import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import IconImage from "../../Shared/IconImage/IconImage";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";

import { Grid, Container } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/img/about-bg-shape.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10em 0 0 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class SectionAbout extends React.Component {
  render() {
    return (
      <Wrapper id="about">
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
                <ImageWrapper>
                  <ImageProduct />
                </ImageWrapper>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default SectionAbout;
