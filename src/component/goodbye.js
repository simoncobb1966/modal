import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Goodbye extends Component {

  
    constructor(props, context) {
        super(props, context);
    
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          render: false
        };
        
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        // this.props.parentClose();
        this.setState({ show: true });
        
      }

    render () {

        return (
            <>
            <Button variant="primary" onClick={this.handleShow}>
              Goodbye Modal
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Goodbye Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>Saying goodbye</Modal.Body>
              <Modal.Footer>
   
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>

        );
      }
      }
    
    export default Goodbye;