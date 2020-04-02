import * as React from 'react';
import "./Card.css";
import { Grid, Image } from 'semantic-ui-react'

class Card extends React.Component{
    public render(){ 
        return (
            <Grid columns='two' divided>
                <Grid.Row>
                    <Grid.Column>
                        <div className="wrapper">
                            <div className="item">
                                <Image src="/img/image-icon-1.png" alt="imageIcon1" className="img"/>
                            </div>
                            <div className="item">
                                <p className="paragraph">Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology.</p>
                            </div>  
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Card;