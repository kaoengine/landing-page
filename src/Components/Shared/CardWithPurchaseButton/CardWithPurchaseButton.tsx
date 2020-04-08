import * as React from "react";
import { Card, Image, List } from "semantic-ui-react";
import "./CardWithPurchaseButton.css";
import ButtonComponent from "../Button/ButtonComponent";
export default class CardFancy extends React.Component {
  public render() {
    return (
      <Card className="card single-pricing-pack">
        <Card.Content>
          <Card.Header>Basics</Card.Header>
          <Image src="/img/basicPurchase.svg" />
          <Card.Meta>$29</Card.Meta>
          <List>
            <List.Item className="listItem">Push Notifications</List.Item>
            <List.Item className="listItem">Data Transfer</List.Item>
            <List.Item className="listItem">SQL Database</List.Item>
            <List.Item className="listItem">Search & SEO Analytics</List.Item>
            <List.Item className="listItem">24/7 Phone Support</List.Item>
            <List.Item className="listItem">
              2 months technical support
            </List.Item>
            <List.Item className="listItem">2+ profitable keyword</List.Item>
          </List>
          <Card.Content extra>
            <ButtonComponent buttonName={"Purchase now"} />
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}
