import React, { FunctionComponent, useState } from "react";
import { Image, Segment, Grid } from "semantic-ui-react";
import { Section2r } from "../../Section/Section2r";
import { Social, SocialIcon } from "../Social";
import "./TeamImage.css";

const square = {
  width: 400,
  height: 400,
}

const segmentStyle = {
  ...square,
  overflow: 'hidden',
  position: 'relative'
}
export interface TeamInfo {
  name: string;
  url: string
  jobTitle: string;
  socialIcon: SocialIcon[];
}

type TeamImageProps = {
  infor: TeamInfo;
};


export const TeamImage: FunctionComponent<TeamImageProps> = ({ infor }) => {
  const [isHover, setHover] = useState(false);
  const TeamSocialIconList: any[] = infor.socialIcon.map(el => <Grid.Column><Social icon={el} /></Grid.Column>);
  return (
    <div onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Segment circular style={segmentStyle}>
        <div className="team-img" ><img src={infor.url} alt={infor.name} style={square} /></div>
        {isHover && <div className="team-infor" style={square}>
          <Section2r header={infor.name} subHeader={infor.jobTitle} component={TeamSocialIconList} /></div>}
      </Segment>
    </div>
  )
};