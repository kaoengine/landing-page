import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";
import Button, { Icons } from "../../Shared/Button";
import { Grid } from "semantic-ui-react";

import styled from "styled-components";
import { Color } from "Components/Shared/Badget";

const Wrapper = styled.div`
  background: url(img/app-hero-bg.jpg) no-repeat center center / cover;
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  padding-top: 100px;
  &:before {
    position: absolute;
    content: "";
    background-image: linear-gradient(
      to right,
      rgba(32, 40, 119, 0.95),
      rgba(55, 46, 149, 0.95),
      rgba(83, 49, 177, 0.9),
      rgba(114, 48, 205, 0.85),
      rgba(150, 41, 230, 0.95)
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 500px 250px;
  grid-template-rows: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  height: 250px;
  align-content: start;
  justify-content: center;
  color: #fff;
`;

const WrapperButtonMargin = styled.div`
  margin: 10px 0;
`;
const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
`;
class DownloadSection extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Grid.Row columns={2}>
            <WrapperContent>
              <Grid.Column computer={8}>
                <Grid.Row>
                  <SectionVerbal
                    header={"Start Managing your apps business, more faster"}
                    Color={Color.Orange}
                  />
                  <Tile
                    content={
                      "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively."
                    }
                  />
                </Grid.Row>
                <Grid.Row>
                  <WrapperButtonMargin>
                    <Button
                      buttonName="Play Store"
                      Icons={Icons.Android}
                    ></Button>
                    <Button buttonName="App Store" Icons={Icons.Apple}></Button>
                  </WrapperButtonMargin>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column computer={8}>
                <ImageWrapper>
                  <ImageProduct />
                </ImageWrapper>
              </Grid.Column>
            </WrapperContent>
          </Grid.Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default DownloadSection;
