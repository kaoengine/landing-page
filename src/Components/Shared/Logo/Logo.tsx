import * as React from 'react';


class Logo extends React.Component{
    public render(){
        const DivimageFluid = {
            height: 'auto',
            maxWidth: '100%',
        }
        return (
            <div style={DivimageFluid}>
                <img src='/img/AppCo-logo.png' alt="Appco"/>
            </div>
        )
    }
};

export default Logo;