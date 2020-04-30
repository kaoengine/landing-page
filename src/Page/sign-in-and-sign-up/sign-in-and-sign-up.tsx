import React from "react";
import InfoComponent from "../../Components/Shared/InfoComponent/InfoComponent";
import Login from "../../Components/Shared/Login/Login";

import Styled from "styled-components";
// import { Grid } from '@material-ui/core';
import { Grid } from "semantic-ui-react";

const Wrapper = Styled.div`
    background: #f4f7fa;
    min-height: 100vh;
    position: relative;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const SignInAndSignUp = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default SignInAndSignUp;
