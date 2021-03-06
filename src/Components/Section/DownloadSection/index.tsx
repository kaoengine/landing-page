import * as React from "react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { Tile } from "../../Shared/Tiles/index";
import ImageProduct from "../../Shared/Image";
import Button, { Icons } from "../../Shared/Button";
import { Grid } from "semantic-ui-react";

import styled from "styled-components";
import { Color } from "Components/Shared/Badget";
import { connect } from "react-redux";
import { PurchaseById } from "../../../Actions";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: url(img/app-hero-bg.jpg) no-repeat center center / cover;
  position: relative;
  width: 100%;
  display: inline-block;
  padding: 8em;
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

  @media only screen and (min-width: 320px) {
    box-sizing: border-box;
    padding: 2em 1em;
  }
`;

const WrapperButtonMargin = styled.div`
  margin: 10px 0;
`;
const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
`;

interface IProps {
  onHandleClick: any;
}
class DownloadSection extends React.Component<IProps> {
  render() {
    return (
      <Wrapper>
        <Grid stackable columns={2}>
          <Grid.Row>
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
                  <Link to="/purchase">
                    <Button
                      buttonName="Play Store"
                      Icons={Icons.Android}
                      onHandleClick={this.props.onHandleClick}
                    ></Button>
                  </Link>
                  <Link to="/purchase">
                    <Button
                      buttonName="App Store"
                      Icons={Icons.Apple}
                      onHandleClick={this.props.onHandleClick}
                    ></Button>
                  </Link>
                </WrapperButtonMargin>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column computer={8}>
              <ImageWrapper>
                <ImageProduct />
              </ImageWrapper>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    id: state.PurchaseApp.id,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleClick: () => dispatch(PurchaseById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DownloadSection);
