import React from 'react';
import InfoComponent from '../../Components/Shared/InfoComponent/InfoComponent';
import Login from '../../Components/Shared/Login/Login';

import Styled from 'styled-components';
import { Grid } from '@material-ui/core';

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
    let loginDetail = {
        title: "Welcome Back !",
        imageUrl: 'img/hero-bg-1.jpg',
        detail: "Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change."
    };
    // let RegisterDetail = {
    //     title: "Create Your Account",
    //     imageUrl: 'img/hero-bg-2.jpg',
    //     detail: "Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change."
    // };
    return (
        <Wrapper>
            <Grid container spacing={3}>
                <Grid item md={8} xs sm>
                    <InfoComponent
                        title={loginDetail.title}
                        detail={loginDetail.detail}
                        imageUrl={loginDetail.imageUrl} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Login />
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default SignInAndSignUp;