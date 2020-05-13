/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";

import { Grid, Container, Input, Button as _Button } from "semantic-ui-react";
import styled from "styled-components";
import Button from "../../Shared/Button";

//import connect component from react-redux
import { connect } from "react-redux";

//import FetchAPi action
import { FetchApi } from "../../../Actions";

const Wrapper = styled.div`
  background: url("/img/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10em 0 0 0;
  .fifteen.wide.column {
    align-self: center;
  }

  //  sizing mobile responsive
  @media only screen and (min-width: 320px) {
    box-sizing: border-box;
    padding: 8em 1em;
    margin-bottom: 20px;
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
interface IProps {
  FetchApi: any;
  API: any;
}
class HeroSection extends React.Component<IProps> {
  render() {
    const { loading, url, error, id } = this.props.API;
    console.log(loading);
    return (
      <Wrapper>
        <Container>
          <Grid stackable columns={2} centered>
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
                      <Input
                        type="text"
                        placeholder="info@yourdomain.com"
                        action
                      >
                        <input />
                        <Button
                          className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                          buttonName="Subscribe"
                        />
                      </Input>
                    </InputWapper>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <_Button
                      circular
                      icon="play"
                      onClick={() => this.props.FetchApi()}
                    />
                  </Grid.Column>
                  <Grid.Column width={14} verticalAlign="middle">
                    <Tile content={"Watch Video Overview."} />
                  </Grid.Column>
                  <Grid.Row>
                    {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p>Error Mat!</p>
                    ) : (
                      <img src={url} alt="API" />
                    )}
                  </Grid.Row>
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

const mapStateToProps = (state: any) => {
  return {
    API: state.API,
    FetchApi: state.FetchApi,
  };
};
export default connect(mapStateToProps, { FetchApi })(HeroSection);
