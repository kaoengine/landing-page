import * as React from "react";
import { Grid, Container } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";
import CardWithPurchaseButton from "../../Shared/CardWithPurchaseButton";
import AccordionComponent from "../../Shared/AccordionComponent/AccordionComponent";

import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/img/shape-bg-right.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10em 0;
  align-items: center;
  align-content: center;
  font-size: inherit;
  line-height: 1.75;
  font-weight: 400;
`;
class PricingComponent extends React.Component {
  render() {
    return (
      <Wrapper id="pricing">
        <Container>
          <Grid>
            <Grid.Row textAlign="center" centered>
              <SectionVerbal
                header={"Afforadble Pricing and Packages"}
                subHeader={"choose your best one"}
              />
            </Grid.Row>
            <Grid.Row centered>
              <p>
                Monotonectally grow strategic process improvements vis-a-vis
                integrated resources.
              </p>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column computer={5}>
                <CardWithPurchaseButton />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              If you need custom services or Need more?{" "}
              <a href="#">Contact us</a>
            </Grid.Row>
            <Grid.Row celled="internally">
              <Grid.Column computer={8}>
                <AccordionComponent />
              </Grid.Column>
              <Grid.Column computer={8}>
                <AccordionComponent />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default PricingComponent;
