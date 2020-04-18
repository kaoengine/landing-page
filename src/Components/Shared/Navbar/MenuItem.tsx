import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import './Menu.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import {Badget} from '../Badget';

const NavbarItems = [
    {name: 'Home'},
    {name: 'About'},
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Screenshots'},
    {name: 'Pages', subMenu:[{
        signIn: 'SignIn',
    }]},
    {name: 'Blog'},
    {name: 'Team'},
    {name: 'Contact'},
]
class MenuItem extends Component {
    render() {
        return (
            <Menu secondary size="large">
                <Menu.Menu position="left">
                    <Menu.Item className="img-logo"><Logo/></Menu.Item>
                </Menu.Menu>
                <Menu.Menu>
                {NavbarItems.map(NavbarItem=>{
                    return NavbarItem.name === 'Pages'? (
                        <Router>                   
                            <Dropdown pointing className='link item' text={NavbarItem.name}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                    <Link to="/signin">Sign In</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>Page2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>                          
                        </Router>
                    ): NavbarItem.name === "Blog" ? (
                        <Router>
                            <Dropdown pointing className='link item' text={NavbarItem.name}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Blog1</Dropdown.Item>
                                    <Dropdown.Item>Blog2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Badget title={'New'}/>
                        </Router>
                    ) :(
                        <Router>
                            <Menu.Item className="menu-item">
                                <Link to="#">{NavbarItem.name}</Link>
                            </Menu.Item>
                        </Router>
                    )
                })}
                </Menu.Menu>
            </Menu>
        );
    }
}

export default MenuItem;