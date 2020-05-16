/* eslint-disable react/jsx-pascal-case */
import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";

import { Grid, Container, Input, Button as _Button } from "semantic-ui-react";
import styled from "styled-components";

//import connect component from react-redux
import { connect } from "react-redux";

//import FetchAPi action
import { FetchVideo, AddInfo } from "../../../Actions";
import PopUp from "./PopUp";

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
  FetchVideo: any;
  API: any;
  AddInfo: any;
}
class HeroSection extends React.Component<IProps> {
  state: any = { email: "" };

  onHandleSubmit = (event: any) => {
    event.preventDefault();
    this.props.AddInfo(this.state.email);
    this.setState({ email: "" });
  };

  onHandleChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  componentDidMount() {
    const emailAddress = JSON.parse(localStorage.getItem("email") as any);
    if (localStorage.getItem("email")) {
      this.setState({
        email: emailAddress.email,
      });
    } else {
      this.setState({ email: "" });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    localStorage.setItem("email", JSON.stringify(prevState));
  }
  render() {
    const { url, isDisplay } = this.props.API;
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
                    <form onSubmit={this.onHandleSubmit}>
                      <InputWapper>
                        <Input
                          type="text"
                          placeholder="info@yourdomain.com"
                          action="subscribe"
                          value={this.state.email}
                          onChange={this.onHandleChange}
                        />
                        {/* <input /> */}
                      </InputWapper>
                    </form>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column width={2}>
                    <_Button
                      circular
                      icon="play"
                      onClick={() => this.props.FetchVideo(isDisplay)}
                    />
                  </Grid.Column>
                  <Grid.Column width={14} verticalAlign="middle">
                    <Tile content={"Watch Video Overview."} />
                  </Grid.Column>
                  <Grid.Row>
                    {isDisplay ? (
                      <PopUp url={url} isDisplay={isDisplay} />
                    ) : null}
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
    AddInfo: state.AddInfo,
    FetchVideo: state.FetchVideo,
  };
};
export default connect(mapStateToProps, { FetchVideo, AddInfo })(HeroSection);
