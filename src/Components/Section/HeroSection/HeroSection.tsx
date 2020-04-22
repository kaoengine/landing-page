import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/ImageComponent/ImageProduct";

import { Grid, Container, Input, Button } from "semantic-ui-react";
import styled from "styled-components";
import ButtonComponent from "../../Shared/Button/ButtonComponent";

const Wrapper = styled.div`
  background: url("/img/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10em 0 0 0;
  .fifteen.wide.column{
    align-self: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWapper = styled.div`
  display: flex;
  align-content: center;
  .input {
    height: 40px;
    background: transparent;
    width: 100%;
    border-radius: 25px;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;
    overflow: hidden;
    .ui.basic.button {
      margin: 0;
    }
  }
`;

class HeroSection extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Grid columns={2} centered>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <SectionVerbal
                      header={"Brainstorming for desired perfect Usability"}
                      subHeader={
                        "Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"
                      }
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <InputWapper>
                      <Input type="text" placeholder="info@yourdomain.com" action>
                        <input />
                        <ButtonComponent
                          className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                          buttonName="Subscribe"
                        />
                      </Input>
                    </InputWapper>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={1}>
                    <Button circular icon="play" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <Tile content={"Watch Video Overview."} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <ImageWrapper>
                <ImageProduct />
              </ImageWrapper>
            </Grid.Column>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default HeroSection;
