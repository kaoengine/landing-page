import * as React from 'react';
import {Grid,Header, List} from 'semantic-ui-react';

class DescriptionContact extends React.Component{
    public render(){
    return(
            <Grid.Column >
                <Header as='h3'>Head Office</Header>
                <List>
                    <List.Item icon='location arrow' content='121 King Melbourne Australia 3000' />
                    <List.Item icon='mobile alternate' content='+61 2 8376 6284' />
                    <List.Item
                    icon='mail outline'
                    content={<a href='mailto:benlee@semantic-ui.com'>mail@example.com</a>}
                    />
                    <List.Item
                    icon='world'
                    content={<a href='http://www.semantic-ui.com'>www.yourdomain.com</a>}
                    />
                </List>
            </Grid.Column>
        )
    }
}

export default DescriptionContact;