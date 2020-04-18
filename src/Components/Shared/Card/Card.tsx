import * as React from "react";
import "./Card.scss";
import { Grid } from "semantic-ui-react";
import IconImage from "../IconImage/IconImage";

class Card extends React.Component {
  public render() {
    return (
      <Grid columns="two" divided>
        <Grid.Row>
          <Grid.Column>
            <div className="wrapper">
              <div className="item">
                <IconImage />
              </div>
              <div className="item">
                <p className="paragraph">
                  Proactively syndicate open-source e-markets after low-risk
                  high-yield synergy. Professionally simplify visionary
                  technology.
                </p>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Card;
