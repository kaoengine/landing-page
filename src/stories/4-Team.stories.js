import React from 'react';
import { TeamImage } from "../Components/Shared/TeamImage"

export default {
    title: 'TeamImage',
};


const teamInfo = {
    name: "photo1",
    url: "http://appco.themetags.com/img/01.png",
    jobTitle: "test",
    socialIcon: ['linkedin icon', "facebook icon"]
};


export const _TeamImage = () => <TeamImage info={teamInfo}></TeamImage>
