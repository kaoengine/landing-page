import React from 'react';
import InfoComponent from '../../Components/Shared/InfoComponent/InfoComponent';
import Login from '../../Components/Shared/Login/Login';
import './sign-in-and-sign-up.scss';

const SignInAndSignUp = () => {
    let loginDetail = {
        title: "Welcome Back !",
        imageUrl: 'img/hero-bg-2.jpg',
        detail: "Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change."
    };
    let RegisterDetail = {
        title: "Create Your Account",
        imageUrl: 'img/hero-bg-1.jpg',
        detail: "Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change."
    };
    // let RegisterDetail = {
    //     title: "Welcome Back !",
    //     detail: "Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change."
    // };
    return (
        <div className="sign-in-and-sign-up">
            <div className="main">

                {/* <!--hero div start--> */}
                <div className="hero-section full-screen gray-light-bg">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">

                            <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
                                <InfoComponent title={loginDetail.title} detail={loginDetail.detail} imageUrl={loginDetail.imageUrl} />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                <Login />
                            </div>
                        </div>
                        {/* <!-- / .row --> */}
                    </div>
                </div>
                {/* <!--hero div end--> */}

            </div>
        </div>
    );
}

export default SignInAndSignUp;