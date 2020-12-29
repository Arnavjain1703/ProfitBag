import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { Link } from 'react-scroll';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <p className="navbar-logo">PROFITBAG</p>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
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