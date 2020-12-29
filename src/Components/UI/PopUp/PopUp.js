import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap'
import classes from './PopUp.module.css'

function PopUp(props) {

    return (
      <Modal className="allmodals"
      {...props}>
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Success!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message Sent</h4>
        <p>
          Your message has been sent. Thank you for contacting us.
        </p>
      </Modal.Body>
      <Modal.Footer className={classes.modalfoot}>
        <Button className={classes.btn} onClick={props.onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
export default PopUp;