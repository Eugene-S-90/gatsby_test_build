
import React from "react"
import './card-section.css'

import Icon1 from "../../images/icon_red.png"
import Icon2 from "../../images/icon_yellow.png"
import Icon3 from "../../images/icon_orange.png"
import Icon4 from "../../images/icon_grey.png"
import BgRect from "../../images/qc-rect.png"

const CardSection = () => (
    <div className="qc-card" style={{
        backgroundImage: "url(" + BgRect + ")",
    }}>
        <div className="qc-card__wrapper">
            <div className="qc-card__item">
                <div className="qc-card__item-img">
                    <img src={Icon1} alt="img" />
                </div>
                <h4 className="qc-card__item-title">Code editor</h4>
                <p className="qc-card__item-description">High open-source standards of reliability and convenience</p>
                <a href="#" className="qc-card__item-link">Read more</a>
            </div>
            <div className="qc-card__item">
                <div className="qc-card__item-img"><img src={Icon2} alt="img" /></div>
                <h4 className="qc-card__item-title">Algo engines</h4>
                <p className="qc-card__item-description">Catalyst is an algorithmic trading library for crypto-assets based on Zipline</p>
                <a href="#" className="qc-card__item-link">Read more</a>
            </div>
            <div className="qc-card__item">
                <div className="qc-card__item-img"><img src={Icon3} alt="img" /></div>
                <h4 className="qc-card__item-title">CRM for strategies</h4>
                <p className="qc-card__item-description">Easy management of algorithms for traders </p>
                <a href="#" className="qc-card__item-link">Read more</a>
            </div>
            <div className="qc-card__item">
                <div className="qc-card__item-img"><img src={Icon4} alt="img" /></div>
                <h4 className="qc-card__item-title">Financial reports</h4>
                <p className="qc-card__item-description">Automated performance reports for each algo </p>
                <a href="#" className="qc-card__item-link">Read more</a>
            </div>
        </div>
    </div>
)


export default CardSection
