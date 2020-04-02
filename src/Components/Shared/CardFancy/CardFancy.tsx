import * as React from 'react';
import CSS from 'csstype';
import './CardFancy.css'
export default class CardFancy extends React.Component{
    public render(){

        const cardStyle: CSS.Properties = {
            textAlign: 'center',
            alignItems :'center',
            borderRadius :'25px',
            padding:0,
            margin:0,
        }

        const rowStyle = {
            marginLeft: '20%'
        }
        const headerStyle = {
            fontSize: '30px',
            lineHeight: '30px',
            marginBottom: '20px'
        }

        const metaStyle : CSS.Properties= {
            fontFamily:'Montserrat',
            fontSize: '40px',
            fontWeight: 'bold',
            lineHeight: '40px',
            marginTop: '15px',
            marginBottom : '35px'
        }

        const listStyle : CSS.Properties = {
            fontFamily:'Open Sans',
            fontSize: '1rem',
            fontWeight:'bold',
            color: 'rgb(132, 146, 166)',
        }

        const item = {
            paddingBottom: '6px'
        }

        const buttonStyle = {
            marginTop: '1.2rem',
            marginBottom: '1.2rem',
            borderRadius : '25px',
            width:'80%',
            fontSize:'1.2rem',
            lineHeight:'1.2rem'
        }
        return(
            <div className="ui grid">
                <div className="row" style={rowStyle}>
                    <div className="thirteen wide column" style={{textAlign:'center',padding:'10px',alignContent:'center'}}>
                        <h1 className="ui header" style={{fontSize:'2.441em'}}>Afforadble Pricing and Packages</h1>
                        <h2 className="ui header">choose your best one</h2>
                        <h4 className="ui header">Monotonectally grow strategic process improvements vis-a-vis integrated resources.</h4>
                    </div>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="four wide column">
                        <div className="ui card single-pricing-pack" style={cardStyle}>
                            <div className="content">
                                <div className="header" style={headerStyle}>Basics</div>
                                <div className="image" style={{width:'200px',height:'200px'}}>
                                    <img src="/img/basicPurchase.svg" alt="basic" style={{maxWidth:'100%', height:'auto'}} />
                                </div>
                                <div className="meta" style={metaStyle}>$29</div>
                                <div className="description">
                                    <div role="list" className="ui list" style={listStyle}>
                                        <div role="listitem" className='item' style={item}>Push Notifications</div>
                                        <div role="listitem" className="item" style={item} >Data Transfer</div>
                                        <div role="listitem" className="item" style={item}>SQL Database</div>
                                        <div role="listitem" className="item" style={item}>Search & SEO Analytics</div>
                                        <div role="listitem" className="item" style={item}>24/7 Phone Support</div>
                                        <div role="listitem" className="item" style={item}>2 months technical support</div>
                                        <div role="listitem" className="item" style={item}>2+ profitable keyword</div>
                                    </div>
                                </div>
                                <div className="extra content">
                                    <button className="ui purple basic button" style={buttonStyle}>Purchase now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui card single-pricing-pack" style={cardStyle}>
                            <div className="content">
                                <div className="header" style={headerStyle}>Standard</div>
                                <div className="image" style={{width:'200px',height:'200px'}}>
                                    <img src="/img/standardPurchase.svg" alt="standard" style={{maxWidth:'100%', height:'auto'}} />
                                </div>
                                <div className="meta" style={metaStyle}>$149</div>
                                <div className="description">
                                    <div role="list" className="ui list" style={listStyle}>
                                        <div role="listitem" className="item" style={item}>Push Notifications</div>
                                        <div role="listitem" className="item" style={item}>Data Transfer</div>
                                        <div role="listitem" className="item" style={item}>SQL Database</div>
                                        <div role="listitem" className="item" style={item}>Search & SEO Analytics</div>
                                        <div role="listitem" className="item" style={item}>24/7 Phone Support</div>
                                        <div role="listitem" className="item" style={item}>1 year technical support</div>
                                        <div role="listitem" className="item" style={item}>50+ profitable keyword</div>
                                    </div>
                                </div>
                                <div className="extra content">
                                    <button className="ui purple basic button" style={buttonStyle}>Purchase now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui card single-pricing-pack" style={cardStyle}>
                            <div className="content">
                                <div className="header" style={headerStyle}>Unlimited</div>
                                <div className="image" style={{width:'200px',height:'200px'}}>
                                    <img src="/img/unlimitedPurchase.svg" alt="unlimited" style={{maxWidth:'100%', height:'auto'}} />
                                </div>
                                <div className="meta" style={metaStyle}>$39</div>
                                <div className="description">
                                    <div role="list" className="ui list" style={listStyle}>
                                        <div role="listitem" className="item" style={item}>Push Notifications</div>
                                        <div role="listitem" className="item" style={item}>Data Transfer</div>
                                        <div role="listitem" className="item" style={item}>SQL Database</div>
                                        <div role="listitem" className="item" style={item}>Search & SEO Analytics</div>
                                        <div role="listitem" className="item" style={item}>24/7 Phone Support</div>
                                        <div role="listitem" className="item" style={item}>6 months technical support</div>
                                        <div role="listitem" className="item" style={item}>10+ profitable keyword</div>
                                    </div>
                                </div>
                                <div className="extra content">
                                    <button className="ui purple basic button" style={buttonStyle}>Purchase now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}