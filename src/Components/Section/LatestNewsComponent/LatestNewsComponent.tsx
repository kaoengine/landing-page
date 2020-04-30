import * as React from "react";
import { Grid, Container } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { CardBlog } from "../../Shared/CardBlog";
import { Color } from "../../Shared/Badget";
import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (min-width: 320px) {
    padding: 0 1em;
    margin-bottom: 2.25em;
  }
`;
class LatestNewsComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container id="news">
          <Grid stackable>
            <Grid.Row centered>
              <SectionVerbal
                header={"Our Latest News"}
                subHeader={
                  "Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively transform tactical methods of empowerment via resource sucking core."
                }
              />
            </Grid.Row>
            <Grid.Row colums={3}>
              <Grid.Column computer={5}>
                <CardBlog
                  title={"Lifestyles"}
                  color={Color.Blue}
                  date={Date().toString()}
                  comment={"45 comments"}
                  share={"10 shared"}
                  header={"Appropriately productize fully"}
                  description={
                    "Some quick example text to build on the card title and make up the bulk."
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default LatestNewsComponent;
