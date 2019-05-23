import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Goodbye from './goodbye';

class Hello extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleCloser = () => {
        this.handleClose()
        return (123)
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {

        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Hello Modal
            </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Hello Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hello Text, Woohoo, you're reading this text in a modal!</Modal.Body>
                    <h1>Hello !</h1>
                    <h1>Hello Again</h1>
                    <Modal.Footer>
                        {/* <Button onClick={this.handleCloser}>Goodbye</Button> */}

                        <Goodbye 
                        a={this.handleCloser()}
                // MyChild parentClose={this.handleClose}
                  />
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

export default Hello;