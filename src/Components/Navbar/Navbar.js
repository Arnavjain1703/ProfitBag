import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link } from 'react-scroll';
import TbLogo from '../../assets/images/logo.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <p className="navbar-logo"><img class="tradebag-logo" src={TbLogo}/>TRADEBAG</p>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> */}
<div id="nav-icon1" className={this.state.clicked? 'open' : 'no'}>
  <span></span>
  <span></span>
  <span></span>
</div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link onClick={this.handleClick} className={item.cName} to={item.url} smooth={true} duration={1000}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>Get&nbsp;app</Button>
            </nav>
        )
    }
}

export default Navbar