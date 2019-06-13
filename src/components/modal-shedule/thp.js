import React from 'react';
import THPImg from '../../images/qc-thp.svg'
const ThP = (props) => {
    return (
        <div className="qc-thp__wrapper">
            <img className="qc-thp__img" src={THPImg} alt="img"/>
            <h2 className="qc-thp__title">Thank you for request</h2>
            <p className="qc-thp__descr">Check your email to get the best deal</p>
            <button className="qc-thp__btn" onClick={props.closeModal}>Ok</button>
        </div>
    );
};

export default ThP;