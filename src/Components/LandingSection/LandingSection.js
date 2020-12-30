import React, { Component } from "react";
import classes from './LandingSection.module.css';

class LandingSection extends Component {

  
  state={
    background:"#FFFFFF",
    color: "#03102F"
  }

  hoverAdder=()=>{
    this.setState({ background:"#03102F"});
    this.setState({ color: "#FFFFFF"});
  }

  hoverRemover=()=>{
    this.setState({ background:"#FFFFFF"});
    this.setState({ color: "#03102F"});
  }

    render(){

      return (
        <div id='home' className={classes.landingSection}>
          <div className={classes.heading}>
        Start Trading<br />
        Today With<br />
        Profitbag<br />
        </div>
        <div className={classes.description}>
        With Rtrade you can do trading Anywhere <br className={classes.breaks}/>
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

        <div id="trade" className={classes.tradebtn} style={{background:`${this.state.background}`,color:`${this.state.color}`}}>
        Start&nbsp;trading </div>

        <div id="down" onMouseEnter={this.hoverAdder} onMouseLeave={this.hoverRemover} className={classes.downloadbtn}>
        Download&nbsp;app
        </div>

        </div>
        </div>
      );
    }
            
}
    
  
  export default LandingSection;