import * as React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import DescriptionContact from "./DescriptionContact";
import { Grid, Container } from "semantic-ui-react";
import styled from "styled-components";
import Button from "../../Shared/Button";

import { connect } from "react-redux";
import { AddContact } from "../../../Actions";

const Wrapper = styled.div`
  background: #f8f9fa;
  padding: 80px 0;
  @media only screen and (min-width: 320px) {
    box-sizing: border-box;
    padding: 5em 1em;
    margin-top: 5em;
    margin-bottom: 5em;
  }
`;

interface IProps {
  AddContact: any;
}
class InputForm extends React.Component<IProps> {
  state = { name: "", email: "", phone: "", company: "", message: "" };

  componentDidMount() {
    const customerContact = JSON.parse(
      localStorage.getItem("customerContact") as any
    );
    if (localStorage.getItem("customerContact")) {
      this.setState({
        name: customerContact.name,
        email: customerContact.email,
        phone: customerContact.phone,
        company: customerContact.company,
        message: customerContact.message,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const object = prevState;
    console.log(object);
    localStorage.setItem("customerContact", JSON.stringify(object));
  }
  changeHandler = (event: any) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event: any) => {
    const { name, email, phone, company, message } = this.state;
    event.preventDefault();
    this.props.AddContact(name, email, phone, company, message);
    this.setState({ name: "", email: "", phone: "", company: "", message: "" });
  };
  public render() {
    return (
      <Wrapper>
        <Container>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column computer={7}>
                <DescriptionContact />
              </Grid.Column>
              <Grid.Column computer={9}>
                <Form onSubmit={this.submitHandler}>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-enter-name"
                      control={Input}
                      placeholder="Enter Name"
                      info={{ fullName: "" }}
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                    <Form.Field
                      id="form-input-control-enter-email"
                      control={Input}
                      placeholder="Your Email"
                      info={{ email: "" }}
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-your-phone"
                      control={Input}
                      placeholder="Your Phone"
                      info={{ phone: "" }}
                      name="phone"
                      value={this.state.phone}
                      onChange={this.changeHandler}
                    />
                    <Form.Field
                      id="form-input-control-your-company"
                      control={Input}
                      placeholder="Your Company"
                      info={{ company: "" }}
                      name="company"
                      value={this.state.company}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Field
                    id="form-input-control-message"
                    control={TextArea}
                    placeholder="message"
                    info={{ message: "" }}
                    value={this.state.message}
                    onChange={this.changeHandler}
                    name="message"
                  />
                  <Button buttonName="Send Message" />
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    state,
    AddContact,
  };
};
export default connect(mapStateToProps, { AddContact })(InputForm);
