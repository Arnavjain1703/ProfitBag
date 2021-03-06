import React, { Component } from "react";
import classes from './Features.module.css';
import {ReactComponent as DeviceIcon} from '../../assets/icons/devices.svg';
import {ReactComponent as NotificationsIcon} from '../../assets/icons/notifications.svg';
import {ReactComponent as TradeIcon} from '../../assets/icons/trade.svg';
import Aos from 'aos';
import 'aos/dist/aos.css'

class Features extends Component {

  componentDidMount()
  {
    Aos.init({

      offset: 40,
      duration: 300,
      easing: 'ease-in-sine',
    });
  }
    render(){
     
      return (
        <div id="features" className={classes.features}>
           <div className={classes.image} data-aos="fade-up"></div>
        <div className={classes.heading} data-aos="fade-up" > Features we provide</div>
            
        <div className={classes.featureContainer}>
        <div className={classes.featurebox}  data-aos="fade-up">
        <DeviceIcon className={classes.icon}/>
        <p className={classes.featurehead}>Access on Any Platform</p>
        <p className={classes.text}>Trade across all the devices without skipping a beat.</p>
        </div>
        <div className={classes.featurebox}  data-aos="fade-up">
        <NotificationsIcon className={classes.icon}/>
        <p className={classes.featurehead}>Get Instant Notifications</p>
        <p className={classes.text}>Keep track of your orders and other trading activity.</p>
        </div>
        <div className={classes.featurebox}  data-aos="fade-up">
        <TradeIcon className={classes.icon}/>
        <p className={classes.featurehead}>Trade on the GO!</p>
        <p className={classes.text}>Trade anytime, even with slow internet connections.</p>
        </div>
        </div>
        </div>
      );
    }
            
}
    
  
  export default Features;