import * as React from "react";
import { Grid } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardWithPurchaseButton from "../../Shared/CardWithPurchaseButton/CardWithPurchaseButton";
import AccordionComponent from "../../Shared/AccordionComponent/AccordionComponent";

class PricingComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <SectionVerbal
              header={"Afforadble Pricing and Packages"}
              subHeader={"choose your best one"}
            />
          </Grid.Column>
          <Grid.Column width={16} textAlign="center">
            <p>
              Monotonectally grow strategic process improvements vis-a-vis
              integrated resources.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <CardWithPurchaseButton />
          </Grid.Column>
          <Grid.Column>
            <CardWithPurchaseButton />
          </Grid.Column>
          <Grid.Column>
            <CardWithPurchaseButton />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row celled="internally">
          <Grid.Column width={8}>
            <AccordionComponent />
          </Grid.Column>
          <Grid.Column width={8}>
            <AccordionComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PricingComponent;
