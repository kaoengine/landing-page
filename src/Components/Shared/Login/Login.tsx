import React from "react";
import FormInput from "../Form-input/Form-input";
import ButtonComponent from '../Button';
import Styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

type iState = {
  email: string;
  password: string;
}

const Wrapper = Styled.div`
  padding: 0 3rem;
  margin: 3em 0;
 `;
const Header = Styled.div`
    text-align: center;
 `;
const Heading = Styled.h2`
  font-size: 2rem;
  color: #212529;
`;
const Information = Styled.p`
  font-size: 1em;
`;
const SmallInfo = Styled(Information)`
  font-size: .9em;
  text-align: center;
  color: #6c757d;
`;
const Form = Styled.form`
  position: relative;
`;
const FormGroup = Styled.div`
  margin-bottom: 1rem;

`;
const Label = Styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 88%;
`;
const ATag = Styled.a`

`;



class Login extends React.Component<any, iState> {
  state: iState = {
    email: "",
    password: "",
  };

  handleChange = (event: any) => {
    const { value } = event.target;
    this.setState({ 'email': value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Wrapper>
        <Header>
          <Heading>Sign In</Heading>
          <Information>Free access to our dashboard.</Information>
        </Header>
        <Form>
          <FormGroup>
            <FormInput
              name="email"
              type="text"
              handleChange={this.handleChange}
              value={email}
              label="Email"
              minLength="3"
              icon="envelope outline"
              placeholder="name@yourdomain.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Grid container spacing={3}>
              <Grid item md={6} sm xs>
                <Label>Password</Label>
              </Grid>
              <Grid item md={6} sm xs style={{textAlign: 'right'}}>
                <ATag href="/">Forgot password?</ATag>
              </Grid>
            </Grid>

            <FormInput
              name="password"
              type="password"
              handleChange={this.handleChange}
              value={password}
              label=""
              minLength="3"
              icon="unlock alternate"
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          <ButtonComponent classType="signin" buttonName="Sign in" />
            <Information>
              <SmallInfo>
                  Don't have an account yet? <ATag href="/">Sign up</ATag>.
              </SmallInfo>
            </Information>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
