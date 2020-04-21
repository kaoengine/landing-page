import React, { FunctionComponent } from "react";
import { Badget, Color } from "../Badget";
import { Card, Image, Icon, Container, Header } from "semantic-ui-react";
import styled from "styled-components";
// import "./CardBlog.css";

type CardBlogProps = {
  comment: string;
  color: Color;
  date: string;
  description: string;
  header: string;
  share: string;
  title: string;
};

const WrapperContent = styled.div`
  padding: 1.75rem;
`;
const WrapperSpan = styled.span`
  font-size: 0.7em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;
export const CardBlog: FunctionComponent<any> = (props: CardBlogProps) => {
  const { comment, color, date, description, header, share, title } = props;
  return (
    <Container>
      <Card>
        <Image src="/img/hero-bg-1.jpg" wrapped ui={false} />
        <WrapperContent>
          <Card.Content>
            <WrapperSpan>
              <Card.Meta>
                <span>Jan 21,2019</span>
                <span style={{ marginLeft: "3em" }}>{comment}</span>
                <span style={{ marginLeft: "3em" }}>{share}</span>
              </Card.Meta>
            </WrapperSpan>
            <Card.Header>
              <Header as="h3">{header}</Header>
            </Card.Header>
            <Card.Description>{description}</Card.Description>
            <a>
              Read more
              <Icon name="arrow right" />
            </a>
          </Card.Content>
        </WrapperContent>
      </Card>
    </Container>
  );
};
