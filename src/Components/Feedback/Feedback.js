import React, { Component } from "react";
import classes from './Feedback.module.css';
import Carousel from 'react-bootstrap/Carousel' 
import Aos from 'aos';
import 'aos/dist/aos.css'
class Feedback extends Component {
  componentDidMount()
  {
    Aos.init({
      offset: 100,
      duration: 300,
      easing: 'ease-in-sine',
    });
  }
    render(){
     
      return (
        <div id="testimonials" className={classes.feedback}>
           <div className={classes.image} data-aos="fade-up "></div>
            <div data-aos="fade-up " className={classes.heading}>What do our clients say?</div>
<Carousel data-aos="fade-up ">
  <Carousel.Item>
  <div className={classes.Container}>
        {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Vijay Singh</p>
            <p className={classes.text}>
            What I like the most about <br/>
            this app is that it provides <br/>
            live data updates from NSE <br/>
            and MCX with all the latest<br/>
            data and has great account <br/>
            opening benefits! Amazing <br/>
            app for trading. <br/>
            </p>
            </div>
{/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Madan Verma</p>
            <p className={classes.text}>
            A friend recommended me <br/>
            to use this platform for <br/>
            investments and I'm glad <br/>
            he did. I find this app <br/>
            very user-friendly and <br/>
            convenient, especially for <br/>
            a beginner like me.
            </p>
            </div>
  </div>

  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Container}>
    {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Dhriti Chadda</p>
            <p className={classes.text}>I'm working with Tradebag <br/>
            since Jan-2017. All I can
            say  <br/>that they are best in 
            terms  <br/>of broker and 
            technology.  <br/>And it is the 
            smoothest  <br/>app available 
            on any  <br/>brokerage platform.</p>
            </div>
            {/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Vasudha Pathak</p>
            <p className={classes.text}>
            The app is very easy to use. <br />
            The trading process is fast<br />
            and simple. Payout and <br />
            payin options are great. <br />
            Great margins for FNO. <br />
            Overall very good app <br/>
            for disciplined traders.
            </p>
            </div>
  </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className={classes.Container}>
    {/* first review */}
  <div className={classes.box}>
            <p className={classes.head}>Anik Dutta</p>
            <p className={classes.text}>
            This app is a real time saver<br/>
            for me. It syncs everything <br/>
            and gets updated almost <br/>
            immediately. I just cannot <br/>
            emphasize enough on the<br/> 
            importance of this feature <br/>
            for a regular trader.
            </p>
            </div>
            {/* second review */}
            <div className={classes.box2}>
            <p className={classes.head}>Ravi Shah</p>
            <p className={classes.text}>
            No 1 trading platform in <br/> 
            the segment with lots of <br/>
            technical parameters and <br/>
            features. I'm using this app <br/>
            since a while now and the<br/> 
            app is improving with each<br/>
            update. Totally satisfied.
            </p>
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