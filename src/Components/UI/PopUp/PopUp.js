import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import classes from './PopUp.module.css'

function PopUp(props) {

    return (
      <Modal className="allmodals"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}>
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="poptitle">Success!</p>
          {/* <Button className={classes.btn} onClick={props.onHide()}>Close</Button> */}
          <i className='fas fa-times popup-icon' onClick={props.onHide()}></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your message has been sent. Thank you for contacting us.
        </p>
      </Modal.Body>
    </Modal>
    );
  }
export default PopUp;