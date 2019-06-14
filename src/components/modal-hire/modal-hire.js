
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './modal.css'
import axios from 'axios';

import CountryList from './countryList'
import THP from './thp'



class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thankYouMessage: false,
            'entry.1432186498': '',
            'entry.158088820': '',
            'entry.443332712': '',
            'entry.2092095279': '',
            'entry.1877575094': '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        let formData = new FormData();
        formData.append('entry.1432186498', this.state['entry.1432186498'])
        formData.append('entry.158088820', this.state['entry.158088820'])
        formData.append('entry.443332712', this.state['entry.443332712'])
        formData.append('entry.2092095279', this.state['entry.2092095279'])
        formData.append('entry.1877575094', this.state['entry.1877575094'])
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios.post('https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/3/d/e/1FAIpQLSc05isL8hirm2n1R-2K8M-wOU9Sy_SVSfzOGMNE72MA-eg8pQ/formResponse',
            formData
        )
            .then((response) => {
                if (response.status === 200) {
                    console.log("nice!")
                    this.setState({ thankYouMessage: true });
                    setTimeout(() => {
                        this.setState({ thankYouMessage: false });
                    }, 4000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <>

                <Modal open={this.props.open} onClose={this.props.closeModal}>
                    {!this.state.thankYouMessage ?
                        (<div>
                            <h2 className="qc-form__title">Hire us</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className='qc-form__input-wr'>
                                    <input required='required' type='text' name="entry.1432186498" onChange={this.handleChange} />
                                    <label alt='Full Name' placeholder='Full Name'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <select required='required' name="entry.158088820" onChange={this.handleChange}>
                                    <option value="default">Your budget</option>
                                    <option value="1000-5000">1000-5000$</option>
                                    <option value="5000-20000">5000-20000$</option>
                                    <option value="20000<">20000$ or above</option>
                                    </select>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input required='required' type='email' name="entry.443332712" onChange={this.handleChange} />
                                    <label alt='Email' placeholder='Email'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <select required='required' name="entry.2092095279" onChange={this.handleChange}>
                                        <CountryList />
                                    </select>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='tel' name="entry.1877575094" onChange={this.handleChange} />
                                    <label alt='Phone' placeholder='Phone'></label>
                                </div>
                                <button type="submit" class="qc-form__btn">Send</button>
                            </form>
                        </div>)
                        : (<THP closeModal={this.props.closeModal} />)}
                </Modal>
            </>
        );
    }
}



export default ModalForm
