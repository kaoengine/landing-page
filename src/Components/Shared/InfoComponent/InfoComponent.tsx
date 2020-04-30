import React from "react";
import Styled from "styled-components";
// import { Grid } from '@material-ui/core';
import { Grid } from "semantic-ui-react";

interface Props {
  title: string;
  detail: string;
  imageUrl: string;
}

const Wrapper = Styled.div`
        position: relative;
        width: 100%;
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 786px) {
            height: 100vh!important;
        }
        @media (max-width: 786px) {
            padding: 2em 1em;
        }
        &&:before {
            position: absolute;
            content: '';
            background-image: linear-gradient(to right, rgba(32, 40, 119, 0.95), rgba(55, 46, 149, 0.95), rgba(83, 49, 177, 0.90), rgba(114, 48, 205, 0.85), rgba(150, 41, 230, 0.95));
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
 `;

const ContentWrap = Styled.div`
        height: 100%;
        width: 100%;
        z-index: 1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
`;
const Heading = Styled.h2`
        color: #ffffff;
        position: relative;
        font-size: 2em
        
`;
const Information = Styled.p`
        color: #ffffff;
        position: relative;
        font-size: 1.5em;
        @media (max-width: 786px) {
            font-size: 1em;
        }
`;

const InfoComponent = (props: Props) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    >
      <ContentWrap>
        <Grid item spacing={5} md={8}>
          <Heading>{props.title}</Heading>
          <Information>{props.detail}</Information>
        </Grid>
      </ContentWrap>
    </Wrapper>
  );
};

export default InfoComponent;
