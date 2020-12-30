import React, { Component } from "react";
import classes from './Footer.module.css';
import {ReactComponent as SIlogo} from '../../assets/icons/silogo.svg';

class Footer extends Component {

    render(){

      return (
        <div className={classes.footer}>
        DESIGNED & DEVELOPED BY : <SIlogo className={classes.logo} /> <a href="https://silive.in"  rel="noreferrer" className={classes.si} target="_blank">SOFTWARE INCUBATOR</a>
        </div>
      );
    }
            
}
    
  
  export default Footer;