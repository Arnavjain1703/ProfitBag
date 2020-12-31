import React, { Component } from "react";
import classes from './Loader.module.css';

class Loader extends Component {

    render(){
      
      return (
        <div class={classes.loadscreen}>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      );
    }
            
}
    
  
export default Loader;