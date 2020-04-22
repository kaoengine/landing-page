import * as React from "react";
import { Grid, Icon, List, Container } from "semantic-ui-react";
import Logo from "../../Shared/Logo/Logo";

class Footer extends React.Component {
  public render() {
    let backgroundImg = "/img/footer-bg.png";
    const flexRow = {
      margin: "20px",
      padding: "20px",
      width: "100%",
      color: "#ffff",
      backgroundImage: `url(${backgroundImg})`,
      display: "flex",
      justifyContent: "space-between",
    };

    const flexColumn = {
      boxSizing: "border-box",
      paddingRight: "14px",
    };

    const paddingContent = {
      paddingTop: "10px",
    };
    const paddingListItem = {
      paddingTop: "4px",
    };
    const paddingSpace = {
      paddingTop: "10px",
    };

    const paddingSpan = {
      paddingRight: "10px",
    };
    return (
      <Container style={flexRow}>
        <Grid divided="vertically">
          <Grid.Row columns={4}>
            <Grid.Column style={flexColumn}>
              <Logo />
              <p className="fontsize" style={paddingContent}>
                Holisticly empower premium architectures without value-added
                ideas. Seamlessly evolve cross-platform experiences.
              </p>
              <span style={paddingSpan}>
                <Icon link name="facebook f" />
              </span>
              <span style={paddingSpan}>
                <Icon link name="twitter" />
              </span>
              <span style={paddingSpan}>
                <Icon link name="instagram" />
              </span>
              <span style={paddingSpan}>
                <Icon link name="pinterest" />
              </span>
            </Grid.Column>
            <Grid.Column style={flexColumn}>
              <h3>Other Links</h3>
              <List.Item>About Us</List.Item>
              <List.Item style={paddingListItem}>Contact Us</List.Item>
              <List.Item style={paddingListItem}>Pricing</List.Item>
              <List.Item style={paddingListItem}>Privacy Policy</List.Item>
              <List.Item style={paddingListItem}>
                Terms and Conditions
              </List.Item>
            </Grid.Column>
            <Grid.Column style={flexColumn}>
              <h3>Supports</h3>
              <List style={paddingSpace}>
                <List.Item
                  icon="location arrow"
                  content="121 King Melbourne Australia 3000"
                />
                <List.Item
                  style={paddingSpace}
                  icon="mobile alternate"
                  content="+61 2 8376 6284"
                />
                <List.Item
                  style={paddingSpace}
                  icon="mail outline"
                  content={
                    <a href="mailto:benlee@semantic-ui.com">mail@example.com</a>
                  }
                />
                <List.Item
                  style={paddingSpace}
                  icon="world"
                  content={
                    <a href="http://www.semantic-ui.com">www.yourdomain.com</a>
                  }
                />
              </List>
            </Grid.Column>
            <Grid.Column style={flexColumn}>
              <h3>Location</h3>
              <img src="/img/world-map.png" alt="map" style={paddingSpace} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
