import * as React from "react";
import { Grid, List } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";

class DescriptionContact extends React.Component {
  public render() {
    return (
      <Grid id="contact">
        <Grid.Row>
          <SectionVerbal
            header="Contact with us"
            subHeader="It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office. Dynamically innovate competitive technology after an expanded array of leadership.
"
          />
        </Grid.Row>
        <Grid.Row>
          <List>
            <List.Item>
              <span>Head Office</span>
            </List.Item>
            <List.Item
              icon="location arrow"
              content="121 King Melbourne Australia 3000"
            />
            <List.Item icon="mobile alternate" content="+61 2 8376 6284" />
            <List.Item
              icon="mail outline"
              content={
                <a href="mailto:benlee@semantic-ui.com">mail@example.com</a>
              }
            />
            <List.Item
              icon="world"
              content={
                <a href="http://www.semantic-ui.com">www.yourdomain.com</a>
              }
            />
          </List>
        </Grid.Row>
      </Grid>
    );
  }
}

export default DescriptionContact;
