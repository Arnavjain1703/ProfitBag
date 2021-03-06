import React, { Component } from "react";
import classes from './ContactUs.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import emailjs from "emailjs-com";
import PopUp from '../UI/PopUp/PopUp'
import Loader from '../UI/Loader/Loader'

class ContactUs extends Component {

  state = { 
    name: "",
    contact: "",
    message: "",
    show:false,
    isLoading: false
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

    hideModal=()=>{
      this.setState({
        show:false
      })
    }

    showModal=()=>{
      this.setState({
        show:true
      })
    }

  handlesubmit = (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_S,process.env.REACT_APP_T, e.target,process.env.REACT_APP_ID)
        .then((result) => {
            this.setState({ isLoading: false });
            this.showModal();
        }, (error) => {
        });
        e.target.reset()
  }

    render(){
     
      return (
        <>
        {this.state.isLoading?<Loader />:null}
        <div id="contact" className={classes.contact} data-aos="zoom-in">
            <div className={classes.image}></div>
        <p className={classes.heading}>Contact US</p>
        <p className={classes.text}>Having any query about features, trials, pricing, need a demo, or anything else? Our team is ready to answer all your questions</p>
        <form className={classes.form} onSubmit={this.handlesubmit}>
          <input type="text" required name="name" pattern="[a-zA-Z][a-zA-Z ]+[a-zA-Z]$" className={classes.fields} onChange={this.handlechangeall} placeholder="Your Name"></input><br/>
          {/* <input type="number" required name="contact" className={classes.fields} onChange={this.handlechangeall} placeholder="Contact Number"></input><br/> */}
          
          <input required name="contact" className={classes.fields} onChange={this.handlechangeall} placeholder="Contact Number"
          pattern="^[6789]\d{9}$" 
          ></input><br/>

          <textarea name="message" required className={classes.textarea} onChange={this.handlechangeall} placeholder="Your Message"></textarea><br/>
          <input type="submit" className={classes.submitbtn} value="Send Message"></input><br/>
        </form>

        <PopUp
        show={this.state.show}
        onHide={() =>this.hideModal}
      />


        </div>
        </>
      );
    }
            
}
    
  
  export default ContactUs;