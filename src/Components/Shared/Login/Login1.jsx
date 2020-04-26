import React from "react";
import FormInput from "../Form-input/Form-input";
import ButtonComponent from '../Button/ButtonComponent';

import "./Login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-signup-wrap px-4 px-lg-5 my-5">
        {/* <!-- Heading --> */}
        <h1 className="text-center mb-1">Sign In</h1>
        <p className="text-center mb-5">Free access to our dashboard.</p>

        {/* <!--login form--> */}
        <form className="login-signup-form">
        <div className="form-group">
          <FormInput
            name="email"
            type="text"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            minLength="3"
            icon="envelope outline"
            placeholder="name@yourdomain.com"
            required
          />
          </div>
          {/* <!-- Password --> */}
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label className="pb-1">Password</label>
              </div>
              <div className="col-auto">
                <a
                  href="/"
                  className="form-text small text-muted"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label=""
            minLength="3"
            icon="unlock alternate"
            placeholder="Enter your password"
            required
          />
          </div>

          {/* <!-- Submit --> */}
          {/* <button className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3">
            Sign in
          </button> */}

        <ButtonComponent className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3" buttonName="Sign in" />
          {/* <!-- Link --> */}
          <p className="text-center">
            <small className="text-muted text-center">
              Don't have an account yet? <a href="sign-up.html">Sign up</a>.
            </small>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
