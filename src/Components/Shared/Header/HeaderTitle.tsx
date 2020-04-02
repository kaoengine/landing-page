import * as React from 'react';
import { Header} from 'semantic-ui-react';


class HeaderTitle extends React.Component{
    public render(){
        const headerStyleH1 = {
            fontSize : 30,
            fontWeigtht: 'bold',
            marginBottom: '25px'
        }

        const headerStyleH3 = {
            fontSize: 20,
            marginBottom:'25px'
        }
        return(
            <div>
                <Header as='h1' style={headerStyleH1}>Use your android or ios device</Header>
                <Header as='h3' style={headerStyleH3}>to manage everything.</Header>
            </div>
        )
    }
}

export default HeaderTitle;