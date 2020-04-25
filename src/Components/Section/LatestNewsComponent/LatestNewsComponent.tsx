import * as React from "react";
import { Grid, Container } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { CardBlog } from "../../Shared/CardBlog";
import { Color } from "../../Shared/Badget";
import styled from "styled-components";

class LatestNewsComponent extends React.Component {
  render() {
    return (
      <Container id="news">
        <Grid>
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
    );
  }
}

export default LatestNewsComponent;
