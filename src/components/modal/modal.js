
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './modal.css'



class ModalForm extends Component {
    state = {
        open: false
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        return (
            <>
                <a href="#" className="qc-main-screen__left-btn" onClick={this.onOpenModal}>Shedule a demo</a>
                <Modal open={open} onClose={this.onCloseModal}>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
          </p>
                </Modal>
            </>
        );
    }
}



export default ModalForm
