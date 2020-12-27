import React, { Component } from "react";
import classes from './ContactUs.module.css';


class ContactUs extends Component {

    render(){
     
      return (
        <div className={classes.contact}>
        <p className={classes.heading}>Contact US</p>
        <p className={classes.text}>Having any query about features, trials, pricing, need a demo, or anything else? Our team is ready to answer all your questions</p>
        <form className={classes.form}>
          <input type="text" className={classes.fields} placeholder="Your Name"></input><br/>
          <input type="text" className={classes.fields} placeholder="Contact Number"></input><br/>
          <textarea className={classes.textarea} placeholder="Your Message"></textarea><br/>
          <input type="submit" className={classes.submitbtn} value="Send Message"></input><br/>
        </form>
        </div>
      );
    }
            
}
    
  
  export default ContactUs;