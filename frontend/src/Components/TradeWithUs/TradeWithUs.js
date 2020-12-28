import React, { Component } from "react";
import classes from './TradeWithUs.module.css';
import {ReactComponent as StepsIcon} from '../../assets/icons/steps.svg';

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
      this.setState({value2:this.state.value})
      this.setState({value3:((this.state.value2))})
      console.log(this.state.value3)
    }, false);

  }
  
    render(){
      
      return (

        <div   className={classes.tradewithus}>

        <div style={{animationDelay:`${this.state.value3}`+"s" }}className={classes.box}></div>
        <div className={classes.heading}>Trade With Us</div>
        <StepsIcon className={classes.icon}/>
        </div>

      );
    }
            
}
    
  
  export default TradeWithUs;