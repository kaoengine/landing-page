import * as React from "react";
import { Grid, Container } from "semantic-ui-react";
import SectionVerbal from "../../Shared/SectionVerbal";
import { CardBlog } from "../../Shared/CardBlog";
import { Color } from "../../Shared/Badget";
import { TeamInfo, TeamImage } from "../../Shared/TeamImage";
import { SocialIcon } from "../../Shared/Social";
import styled from "styled-components";

const Wrapper = styled.div`
.ui.header {
  text-align:center;
}
 .justified.row {
  justify-content: center;
}
 }
`;

class TeamSection extends React.Component {
  header = "Our team members";
  subHeader = "Following reasons show advantages of adding AppCo to your lead pages, demos and checkouts";
  teamInfo: TeamInfo[] = [
    {
      name: "photo1",
      url: "http://appco.themetags.com/img/01.png",
      jobTitle: "test",
      socialIcon: [SocialIcon.Facebook, SocialIcon.Google, SocialIcon.Linkedin, SocialIcon.Twitter],
    },
    {
      name: "photo2",
      url: "http://appco.themetags.com/img/02.png",
      jobTitle: "test",
      socialIcon: [SocialIcon.Facebook, SocialIcon.Google, SocialIcon.Linkedin, SocialIcon.Twitter],
    },
    {
      name: "photo3",
      url: "http://appco.themetags.com/img/03.png",
      jobTitle: "test",
      socialIcon: [SocialIcon.Facebook, SocialIcon.Google, SocialIcon.Linkedin, SocialIcon.Twitter],
    },
    {
      name: "photo4",
      url: "http://appco.themetags.com/img/04.png",
      jobTitle: "test",
      socialIcon: [SocialIcon.Facebook, SocialIcon.Google, SocialIcon.Linkedin, SocialIcon.Twitter],
    },
  ];
  TeamList: any[] = this.teamInfo.map((el) => (
    <Grid.Column>
      <TeamImage infor={el} />
    </Grid.Column>
  ));
  render() {
    return (
      <Wrapper id="team">
        <Container>
          <Grid>
            <Grid.Row textAlign="justified">
              <SectionVerbal header={this.header} subHeader={this.subHeader} />
            </Grid.Row>
            <Grid.Row columns={4}>{this.TeamList}</Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default TeamSection;
