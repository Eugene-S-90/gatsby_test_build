
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './modal.css'



class ModalForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>

                <Modal open={this.props.open} onClose={this.props.closeModal}>
                    <h2 className="qc-form__title">Schedule a Demo</h2>
                    <form>
                        <div className='qc-form__input-wr'>
                            <input required='required' type='text' />
                            <label alt='Full Name' placeholder='Full Name'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input required='required' type='text' />
                            <label alt='Company Name' placeholder='Company Name'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input required='required' type='text' />
                            <label alt='Position' placeholder='Position'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input required='required' type='text' />
                            <label alt='Email' placeholder='Email'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <select required='required'>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input required='required' type='text' />
                            <label alt='Phone' placeholder='Phone'></label>
                        </div>
                        <a href="#" className="qc-form__btn">Send</a>
                    </form>

                </Modal>
            </>
        );
    }
}



export default ModalForm
