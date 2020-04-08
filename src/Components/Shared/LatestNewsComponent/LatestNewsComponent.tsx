import * as React from "react";
import { Grid } from "semantic-ui-react";
import SectionVerbal from "../SectionVerbal";
import { CardBlog } from "../CardBlog";
import { Color } from "../Badget";

class LatestNewsComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <SectionVerbal
            header={"Our Latest News"}
            subHeader={
              "Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively transform tactical methods of empowerment via resource sucking core."
            }
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
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
    );
  }
}

export default LatestNewsComponent;
