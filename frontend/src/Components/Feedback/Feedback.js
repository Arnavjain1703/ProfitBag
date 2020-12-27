import React, { Component } from "react";
import classes from './Feedback.module.css';
import Carousel from 'react-bootstrap/Carousel' 

class Feedback extends Component {

    render(){
     
      return (
        <div className={classes.feedback}>
            <div className={classes.heading}>What do our clients say?</div>
            
            
            {/* <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
            <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Rtrade <br/>
            since Jan-2017. All I can <br/>
            say that they are best in <br/>
            terms of broker and <br/>
            technology. And it is the<br/> 
            smoothest app available <br/>
            on any brokerage<br/> platform.</p>
            </div>
            <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Rtrade <br/>
            since Jan-2017. All I can <br/>
            say that they are best in <br/>
            terms of broker and <br/>
            technology. And it is the<br/> 
            smoothest app available <br/>
            on any brokerage<br/> platform.</p>
            </div>
            <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Rtrade <br/>
            since Jan-2017. All I can <br/>
            say that they are best in <br/>
            terms of broker and <br/>
            technology. And it is the<br/> 
            smoothest app available <br/>
            on any brokerage<br/> platform.</p>
            </div>*/}

<Carousel>
  <Carousel.Item>
  <div className={classes.Container}>
        {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
{/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
  </div>

  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Container}>
    {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
            {/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
  </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Container}>
    {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
            {/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Profitbag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
  </div>
  </Carousel.Item>
</Carousel>
            </div> 

        // </div>
      );
    }
            
}
    
  
  export default Feedback;