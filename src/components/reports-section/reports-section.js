
import React from "react"
import './reports-section.css'


import FreedomBg from "../../images/qc-freedom-bg.png"
import ImgSetup from "../../images/qc-Easy_Setup.svg"
import ImgReports from "../../images/qc-Reports.svg"
import ImgSec from "../../images/qc-Security.svg"
import ImgTelegram from "../../images/qc-Telegram.svg"

import BgTradingImg from "../../images/qc-bg-trading.png"

import TradingImg from "../gatsby-images/gt-trading"



const ReportsSection = () => (
    <div className="qc-reports" style={{
        backgroundImage: "url(" +BgTradingImg+ ")",
    }}>
        <div className="qc-reports__left">
            <div className="qc-reports__img-wrapper">
                <TradingImg />
            </div>
        </div>
        <div className="qc-reports__right">
            <h2 className="qc-reports__title">Reports</h2>
            <p className="qc-reports__description">
            Quantcloud provides real-time reports of your trading. Bring clarity to the macro and micro performance of your overall portfolio and individual holdings. 
            </p>
            <div className="qc-crm__bullets">
            <div className="qc-crm__bullets-item">
                <img src={ImgSetup} className="qc-crm__bullets-img" alt="img" />
                <p className="qc-crm__bullets-descr">
                Easy setup of trading configuration
                </p>
            </div>
            <div className="qc-crm__bullets-item">
                <img src={ImgReports} className="qc-crm__bullets-img b-img2" alt="img" />
                <p className="qc-crm__bullets-descr">
                Convenient financial reports
                </p>
            </div>
            <div className="qc-crm__bullets-item">
                <img src={ImgTelegram} className="qc-crm__bullets-img" alt="img" />
                <p className="qc-crm__bullets-descr">
                Telegram notifications
                </p>
            </div>
            <div className="qc-crm__bullets-item">
                <img src={ImgSec} className="qc-crm__bullets-img b-img4" alt="img" />
                <p className="qc-crm__bullets-descr">
                Security system for api keys
                </p>
            </div>
            <div className="qc-crm__bullets-item">
                <img src={ImgSec} className="qc-crm__bullets-img " alt="img" />
                <p className="qc-crm__bullets-descr">
                Security system for api keys
                </p>
            </div>
        </div>
        </div>
    </div>
)


export default ReportsSection
