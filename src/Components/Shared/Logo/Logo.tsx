import * as React from 'react';


class Logo extends React.Component{
    public render(){
        const DivimageFluid = {
            height: 'auto',
            maxWidth: '100%',
        }

        const img = {
            backgroundColor: '#6610f2'
        }
        return (
            <div style={DivimageFluid}>
                <img style={img} src='/img/AppCo-logo.png' alt="Appco"/>
            </div>
        )
    }
};

export default Logo;