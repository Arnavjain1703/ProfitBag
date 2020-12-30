import React, { Component } from "react";
import classes from './LandingSection.module.css';

class LandingSection extends Component {

  
  state={
    background:"#03102F",
    color: "#FFFFFF"
  }

  hoverAdder=()=>{
 
    this.setState({ background:"#FFFFFF"});
    this.setState({ color: "#03102F"});
  }

  hoverRemover=()=>{
    this.setState({ background:"#03102F"});
    this.setState({ color: "#FFFFFF"});
  }

    render(){

      return (
        <div id='home' className={classes.landingSection}>
          <div className={classes.heading}>
        Start Trading<br />
        Today With<br />
        TradeBag<br />
        </div>
        <div className={classes.description}>
        With Tradebag you can do trading Anywhere <br className={classes.breaks}/>
        Anytime on any platform. Download our app <br className={classes.breaks}/>
        or continue with your browers for trading. <br className={classes.breaks}/>
        </div>
        <div className={classes.btnContainer}>

        {/* {this.state.hovered?<div id="trade" className={classes.notrade}>
        Start trading
        </div>:
        <div id="trade" className={classes.tradebtn}>
        Start&nbsp;trading
        </div>} */}

        <div id="trade" onMouseEnter={this.hoverAdder} onMouseLeave={this.hoverRemover} className={classes.tradebtn} style={{background:`${this.state.background}`,color:`${this.state.color}`}}>
        Start&nbsp;trading </div>

        <div id="down"  className={classes.downloadbtn}>
        Download&nbsp;app
        </div>

        </div>
        </div>
      );
    }
            
}
    
  
  export default LandingSection;