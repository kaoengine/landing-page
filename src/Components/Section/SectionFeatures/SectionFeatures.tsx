import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardFancy from "../../Shared/CardFancy/CardFancy";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";

import styled from "styled-components";

import { Grid, Container } from "semantic-ui-react";

const Wrapper = styled.div`
  background: #f8f9fa;
  padding: 10em 0 2em 0;

  @media only screen and (min-width: 320px) {
    box-sizing: border-box;
    padding: 0 1em;
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 35em;
`;

const ParaWrapper = styled.p`
  margin-bottom: 1.25em;
`;
class SectionFeatures extends React.Component {
  render() {
    return (
      <Wrapper id="feature">
        <Container>
          <Grid stackable>
            <Grid.Row columns={2} verticalAlign="middle">
              <Grid.Column>
                <ImageWrapper>
                  <ImageProduct />
                </ImageWrapper>
              </Grid.Column>
              <Grid.Column>
                <SectionVerbal
                  header={"Share your photos with"}
                  subHeader={"friends easily"}
                />
                <ParaWrapper>
                  <Tile
                    content={
                      "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively."
                    }
                  />
                </ParaWrapper>
                <ParaWrapper>
                  <Tile
                    content={
                      "Uniquely simplify sustainable applications whereas adaptive schemas. Competently brand performance based content and."
                    }
                  />
                </ParaWrapper>
                <CardFancy />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default SectionFeatures;
