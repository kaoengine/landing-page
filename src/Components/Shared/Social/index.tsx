import React, { FunctionComponent } from "react";
import { Label } from "semantic-ui-react";

export enum SocialIcon {
  Linkedin = "linkedin icon",
  Google = "google plus icon",
  Twitter = "twitter icon",
  Facebook = "facebook icon"
}

type SocialProps = {
  icon: SocialIcon;
};


export const Social: FunctionComponent<SocialProps> = ({ icon }) => {
  return (
    <div>
      <button className="ui icon button">
        <i className={icon}></i>
      </button>
    </div>
  );
};
