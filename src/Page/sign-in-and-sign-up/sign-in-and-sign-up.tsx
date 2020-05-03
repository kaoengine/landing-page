import React from "react";
import Login from "../../Components/Shared/Login/Login";
import Styled from "styled-components";

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
