import React, { Component } from "react";
import classes from './Feedback.module.css';
import Carousel from 'react-bootstrap/Carousel' 
import Aos from 'aos';
import 'aos/dist/aos.css'
class Feedback extends Component {
  componentDidMount()
  {
    Aos.init({

      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
    render(){
      return (
        <div className={classes.feedback}>
             <div className={classes.image} data-aos="fade-up fade-down"></div>
            <div className={classes.heading}>What do our clients say?</div>

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