import * as React from "react";
import { Card, Image, List, Container } from "semantic-ui-react";
import "./CardWithPurchaseButton.css";
import Button from "../Button";
import styled from "styled-components";
import { PurchaseById } from "../../../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  text-align: center;
  max-width: auto;
  height: auto;
`;

const WrapperMeta = styled.div`
  font-family: "Montserrat";
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
  margin-top: 15px;
  margin-bottom: 35px;
  color: #70707c;
`;

const WrapperListItem = styled.div`
  padding-bottom: 1.2em;
`;

interface IState {
  onHandleClick: any;
}
class CardFancy extends React.Component<IState> {
  public render() {
    return (
      <Wrapper>
        <Container>
          <Card className="card single-pricing-pack" centered>
            <Card.Content>
              <Card.Header as="h3">Basics</Card.Header>
              <Image src="/img/basicPurchase.svg" />
              <WrapperMeta>
                <Card.Meta>$29</Card.Meta>
              </WrapperMeta>
              <Card.Content extra>
                <List>
                  <WrapperListItem>
                    <List.Item>Push Notifications</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>Data Transfer</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>SQL Database</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>Search & SEO Analytics</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>24/7 Phone Support</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>2 months technical support</List.Item>
                  </WrapperListItem>
                  <WrapperListItem>
                    <List.Item>2+ profitable keyword</List.Item>
                  </WrapperListItem>
                </List>
              </Card.Content>
              <Card.Content extra>
                <WrapperListItem>
                  <Link to="/purchase">
                    <Button
                      buttonName={"Purchase now"}
                      onHandleClick={this.props.onHandleClick}
                    />
                  </Link>
                </WrapperListItem>
              </Card.Content>
            </Card.Content>
          </Card>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleClick: () => dispatch(PurchaseById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFancy);
