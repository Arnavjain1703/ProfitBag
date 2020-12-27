import React, { Component } from "react";
import classes from './ContactUs.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

class ContactUs extends Component {

  state = { 
    name: "",
    contact: "",
    message: ""
  }
  componentDidMount()
  {
    Aos.init({

      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
  handlechangeall = (event) =>{
    this.setState ( { [event.target.name] :event.target.value  } )
  }

  handlesubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name)
    console.log(this.state.contact)
    console.log(this.state.message)
  }

    render(){
     
      return (
        <div className={classes.contact}>
             <div className={classes.image} data-aos="fade-up"></div>

        <p className={classes.heading}>Contact US</p>
        <p className={classes.text}>Having any query about features, trials, pricing, need a demo, or anything else? Our team is ready to answer all your questions</p>
        <form className={classes.form}>
          <input type="text" name="name" className={classes.fields} onChange={this.handlechangeall} placeholder="Your Name"></input><br/>
          <input type="number" name="contact" className={classes.fields} onChange={this.handlechangeall} placeholder="Contact Number"></input><br/>
          <textarea name="message" className={classes.textarea} onChange={this.handlechangeall} placeholder="Your Message"></textarea><br/>
          <input type="submit" onClick={this.handlesubmit} className={classes.submitbtn} value="Send Message"></input><br/>
        </form>
        </div>
      );
    }
            
}
    
  
  export default ContactUs;