import React, { Component } from "react";
import classes from './LandingSection.module.css';

class LandingSection extends Component {

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

        <div className={classes.tradebtn}>
        Start trading
        </div>

        <div className={classes.downloadbtn}>
        Download&nbsp;app
        </div>

        </div>
        </div>
      );
    }
            
}
    
  
  export default LandingSection;