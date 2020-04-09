import * as React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import DescriptionContact from './DescriptionContact';
import {Grid} from 'semantic-ui-react'
class InputForm extends React.Component {
    public render(){
        return(
            <Grid>
                <Grid.Row columns={3}>
                <DescriptionContact />
                <Grid.Column>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-enter-name'
                            control={Input}
                            placeholder='Enter Name'
                            info={{fullName:''}}
                        />
                        <Form.Field
                            id='form-input-control-enter-email'
                            control={Input}
                            placeholder='Your Email'
                            info ={{email:''}}
                        />
                        <Form.Field
                            id='form-input-control-your-company'
                            control={Input}
                            placeholder='Your Phone'
                            info={{phone:''}}
                        />
                        <Form.Field
                            id='form-input-control-your-company'
                            control={Input}
                            placeholder='Your Company'
                            info={{company:''}}
                        />
                    </Form.Group>
                    <Form.Field
                            id='form-input-control-message'
                            control={TextArea}
                            placeholder='message'
                            info={{message:''}}
                            />
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Send Message'
                    />
                </Form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        )
    }
}

export default InputForm;