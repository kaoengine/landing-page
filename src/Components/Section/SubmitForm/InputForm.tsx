import * as React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import DescriptionContact from "./DescriptionContact";
import { Grid, Container } from "semantic-ui-react";
import styled from "styled-components";
import Button from "../../Shared/Button";

const Wrapper = styled.div`
  background: #f8f9fa;
  padding: 80px 0;
`;

class InputForm extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column computer={7}>
                <DescriptionContact />
              </Grid.Column>
              <Grid.Column computer={9}>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-enter-name"
                      control={Input}
                      placeholder="Enter Name"
                      info={{ fullName: "" }}
                    />
                    <Form.Field
                      id="form-input-control-enter-email"
                      control={Input}
                      placeholder="Your Email"
                      info={{ email: "" }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-your-company"
                      control={Input}
                      placeholder="Your Phone"
                      info={{ phone: "" }}
                    />
                    <Form.Field
                      id="form-input-control-your-company"
                      control={Input}
                      placeholder="Your Company"
                      info={{ company: "" }}
                    />
                  </Form.Group>
                  <Form.Field
                    id="form-input-control-message"
                    control={TextArea}
                    placeholder="message"
                    info={{ message: "" }}
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

export default InputForm;
