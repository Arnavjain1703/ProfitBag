import React, { Component } from "react";
import classes from './Features.module.css';
import {ReactComponent as DeviceIcon} from '../../assets/icons/devices.svg';
import {ReactComponent as NotificationsIcon} from '../../assets/icons/notifications.svg';
import {ReactComponent as TradeIcon} from '../../assets/icons/trade.svg';

class Features extends Component {

    render(){
     
      return (
        <div className={classes.features}>
        <div className={classes.heading}> Features we provide</div>
            
        <div className={classes.featureContainer}>
        <div className={classes.featurebox}>
        <DeviceIcon className={classes.icon}/>
        <p className={classes.featurehead}>Access on Any Platform</p>
        <p className={classes.text}>Trade across web and mobile<br /> without skipping a beat.</p>
        </div>
        <div className={classes.featurebox}>
        <NotificationsIcon className={classes.icon}/>
        <p className={classes.featurehead}>Get Instant Notifications</p>
        <p className={classes.text}>Keep track of your orders <br/> and other trading activity.</p>
        </div>
        <div className={classes.featurebox}>
        <TradeIcon className={classes.icon}/>
        <p className={classes.featurehead}>Trade on the GO!</p>
        <p className={classes.text}>Trade anytime, even with <br/> slow internet connections.</p>
        </div>
        </div>
        </div>
      );
    }
            
}
    
  
  export default Features;