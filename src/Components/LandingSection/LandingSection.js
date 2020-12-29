import React, { Component } from "react";
import classes from './LandingSection.module.css';

class LandingSection extends Component {

  
  state={
    hovered:false
  }

  hoverAdder=()=>{
    this.setState({hovered:true});
  }

  hoverRemover=()=>{
    this.setState({hovered:false});
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

        {this.state.hovered?<div id="trade" className={classes.notrade}>
        Start trading
        </div>:
        <div id="trade" className={classes.tradebtn}>
        Start&nbsp;trading
        </div>}

        <div id="down" onMouseEnter={this.hoverAdder} onMouseLeave={this.hoverRemover} className={classes.downloadbtn}>
        Download&nbsp;app
        </div>

        </div>
        </div>
      );
    }
            
}
    
  
  export default LandingSection;