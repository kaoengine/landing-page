import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardFancy from "../../Shared/CardFancy/CardFancy";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/ImageComponent/ImageProduct";

import styled from "styled-components";

import { Grid, Container } from "semantic-ui-react";

const Wrapper = styled.div`
  background: #f8f9fa;
  padding: 100px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 35em;
`;

const IconWrapper = styled.div`
  margin-top: 3em;
`;
class SectionFeatures extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Grid>
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
                <IconWrapper>
                  <CardFancy />
                </IconWrapper>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default SectionFeatures;
