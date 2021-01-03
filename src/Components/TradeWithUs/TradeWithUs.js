import React, { Component } from "react";
import classes from './TradeWithUs.module.css';
import {ReactComponent as StepsIcon} from '../../assets/icons/steps.svg';
import {ReactComponent as SmallStepsIcon} from '../../assets/icons/smallsteps.svg';
import Aos from 'aos';
import 'aos/dist/aos.css'

class TradeWithUs extends Component {
  state=
  {
     value:0,
     value2:0,
     value3:0 
    }
  constructor(props)
  {
    super(props)
    this.myRef = React.createRef();
  }
   componentDidMount()
  {
    
    window.addEventListener('scroll', () => {
      this.setState({value:window.pageYOffset / (document.body.offsetTop - window.innerHeight)});
      // this.setState({value2:this.state.value})
      // this.setState({value3:((this.state.value2))})
    }, false);

    Aos.init({


      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });

  }
  
    render(){
      
      return (

        <div  className={classes.tradewithus}>
        <div className={classes.image} data-aos="fade-up"></div>

        <div style={{animationDelay:`${this.state.value}s`}}className={classes.box}></div>
        <div className={classes.phone}   data-aos-offset="390" data-aos="fade-right"></div>

        <div className={classes.laptop} data-aos="fade-up"></div>
        <div className={classes.heading} data-aos-offset="300" data-aos="fade-up">Trade With Us</div>

        {/*  */}
        <div className={classes.icondiv} data-aos-offset="300" data-aos="fade-up"><StepsIcon className={classes.icon} />
        <SmallStepsIcon className={classes.mobicon} />
        </div>
        </div>

      );
    }
            
}
    
  
  export default TradeWithUs;