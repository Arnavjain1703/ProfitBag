import React, { Component } from "react";
import classes from './LandingSection.module.css';

class LandingSection extends Component {

    render(){
     
      return (
        <div className={classes.landingSection}>
          <div className={classes.heading}>
        Start Trading<br />
        Today With<br />
        Profitbag<br />
        </div>
        <div className={classes.description}>
        With Rtrade you can do trading Anywhere <br />
        Anytime on any platform. Download our app <br />
        or continue with your browers for trading. <br />
        </div>
        <div className={classes.btnContainer}>

        <div className={classes.tradebtn}>
        Start trading
        </div>

        <div className={classes.downloadbtn}>
        Download app
        </div>

        </div>
        </div>
      );
    }
            
}
    
  
  export default LandingSection;