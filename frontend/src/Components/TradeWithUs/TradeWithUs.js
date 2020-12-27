import React, { Component } from "react";
import classes from './TradeWithUs.module.css';

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
    }, false);

  }
  
    render(){
      
      return (

        <div   className={classes.tradewithus}>

        <img src={"/assets/images/Laptop.svg"} style={{animationDelay:`${this.state.value3}`+"s" }} ></img>

        </div>

      );
    }
            
}
    
  
  export default TradeWithUs;