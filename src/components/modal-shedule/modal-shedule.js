
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './modal.css'
import axios from 'axios';

import CountryList from './countryList'
import THP from './thp'


import { setTimeout } from "timers";


class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thankYouMessage: false,
            'entry.1227224232': '',
            'entry.471800': '',
            'entry.1817290359': '',
            'entry.384380362': '',
            'entry.705640040': '',
            'entry.428806248': '',
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
        formData.append('entry.1227224232', this.state['entry.1227224232'])
        formData.append('entry.471800', this.state['entry.471800'])
        formData.append('entry.1817290359', this.state['entry.1817290359'])
        formData.append('entry.384380362', this.state['entry.384380362'])
        formData.append('entry.705640040', this.state['entry.705640040'])
        formData.append('entry.428806248', this.state['entry.428806248']);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios.post('https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/u/3/d/e/1FAIpQLSdyRjaQj7cAD1LgTAhpSeadQnM9lMBOZYNb2hpgCaWLvz9C-g/formResponse',
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
                        (<div> <h2 className="qc-form__title">Schedule a Demo</h2>
                            <form onSubmit={this.handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSfmw_YMls6vZ7rHgvCnEiQKDMW1iCsASDWCSnU2R3WJ1oJgJw/formResponse" className="qc-shedule-form">
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='text' name="entry.1227224232" onChange={this.handleChange} />
                                    <label alt='Full Name' placeholder='Full Name'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='text' name="entry.471800" onChange={this.handleChange} />
                                    <label alt='Company Name' placeholder='Company Name'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='text' name="entry.1817290359" onChange={this.handleChange} />
                                    <label alt='Position' placeholder='Position'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='email' name="entry.384380362" onChange={this.handleChange} />
                                    <label alt='Email' placeholder='Email'></label>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <select required='required' name="entry.705640040" onChange={this.handleChange}>
                                        <CountryList />
                                    </select>
                                </div>
                                <div className='qc-form__input-wr'>
                                    <input className="qc-form__input" required='required' type='tel' name="entry.428806248" onChange={this.handleChange} />
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
