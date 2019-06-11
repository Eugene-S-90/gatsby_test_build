
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './modal.css'
import axios from 'axios';


class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'entry.637540399': '',
            'entry.754510680':'',
            'entry.2077105691':'',
            'entry.684889118':'',
            'entry.1073456883':'',
            'entry.940971382':'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit = (event) => {

        event.preventDefault();
        let formData = new FormData();
        formData.append('entry.637540399', this.state['entry.637540399'])
        formData.append('entry.754510680', this.state['entry.754510680'])
        formData.append('entry.2077105691', this.state['entry.2077105691'])
        formData.append('entry.684889118', this.state['entry.684889118'])
        formData.append('entry.1073456883',  this.state['entry.1073456883'])
        formData.append('entry.940971382', this.state['entry.940971382']);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        axios.post('https://docs.google.com/forms/d/e/1FAIpQLSfmw_YMls6vZ7rHgvCnEiQKDMW1iCsASDWCSnU2R3WJ1oJgJw/formResponse', 
            formData
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {

        return (
            <>

                <Modal open={this.props.open} onClose={this.props.closeModal}>
                    <h2 className="qc-form__title">Schedule a Demo</h2>
                    <form onSubmit={this.handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSfmw_YMls6vZ7rHgvCnEiQKDMW1iCsASDWCSnU2R3WJ1oJgJw/formResponse" className="qc-shedule-form">
                        <div className='qc-form__input-wr'>
                            <input  className="qc-form__input" required='required' type='text' name="entry.637540399" onChange={this.handleChange} />
                            <label alt='Full Name' placeholder='Full Name'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input className="qc-form__input" required='required' type='text' name="entry.754510680" onChange={this.handleChange} />
                            <label alt='Company Name' placeholder='Company Name'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input className="qc-form__input" required='required' type='text' name="entry.2077105691"onChange={this.handleChange} />
                            <label alt='Position' placeholder='Position'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input className="qc-form__input" required='required' type='text' name="entry.684889118"onChange={this.handleChange} />
                            <label alt='Email' placeholder='Email'></label>
                        </div>
                        <div className='qc-form__input-wr'>
                            <select required='required' name="entry.1073456883" onChange={this.handleChange}>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='qc-form__input-wr'>
                            <input className="qc-form__input" required='required' type='text' name="entry.940971382" onChange={this.handleChange}/>
                            <label alt='Phone' placeholder='Phone'></label>
                        </div>
                        <a href="#" className="qc-form__btn">Send</a>
                        <button  type="submit" class="popup__button">Отправить</button>
                    </form>

                </Modal>
            </>
        );
    }
}



export default ModalForm
