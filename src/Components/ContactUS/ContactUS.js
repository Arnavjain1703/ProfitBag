import React, { Component } from "react";
import classes from './ContactUs.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import emailjs from "emailjs-com";

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

  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

  handlesubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    console.log(this.state.contact)
    console.log(this.state.message)

    e.preventDefault();

    emailjs.sendForm('service_dfg3xys', 'template_rl22rbh', e.target, 'user_COz5ok5wKikrQvGtbs0kd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  }

    render(){
     
      return (

        <div id="contact" className={classes.contact} data-aos="zoom-in">
            <div className={classes.image} data-aos="zoom-in"></div>
        <p className={classes.heading}>Contact US</p>
        <p className={classes.text}>Having any query about features, trials, pricing, need a demo, or anything else? Our team is ready to answer all your questions</p>
        <form className={classes.form} onSubmit={this.handlesubmit}>
          <input type="text" required name="name" className={classes.fields} onChange={this.handlechangeall} placeholder="Your Name"></input><br/>
          {/* <input type="number" required name="contact" className={classes.fields} onChange={this.handlechangeall} placeholder="Contact Number"></input><br/> */}
          
          <input required name="contact" className={classes.fields} onChange={this.handlechangeall} placeholder="Contact Number"
          pattern="[0-9]{10}" title="This is an error message"
          ></input><br/>

          <textarea name="message" required className={classes.textarea} onChange={this.handlechangeall} placeholder="Your Message"></textarea><br/>
          <input type="submit" className={classes.submitbtn} value="Send Message"></input><br/>
        </form>
        </div>
      );
    }
            
}
    
  
  export default ContactUs;