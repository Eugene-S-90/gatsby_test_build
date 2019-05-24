
import React from "react"
import './crm-section.css'

import FreedomBg from "../../images/qc-freedom-bg.png"
import ImgSetup from "../../images/qc-Easy_Setup.svg"
import ImgReports from "../../images/qc-Reports.svg"
import ImgSec from "../../images/qc-Security.svg"
import ImgTelegram from "../../images/qc-Telegram.svg"

import SvgImgFreedom from "../../images/qc-freedom.svg"

import CrmImg from "../gatsby-images/gt-crm"



const CrmSection = () => (
    <div className="qc-crm" style={{
        backgroundImage: "url(" + FreedomBg + ")",
    }}>
        <div className="qc-crm__left">
            <h2 className="qc-crm__title">CRM</h2>
            <p className="qc-crm__description">Designed by former Goldman Sachs FinTech engineers, Solidus' market surveillance platform utilizes machine learning to help detect, address, investigate and report market manipulation in digital asset trading.<br/>
With Solidus’ solution our clients - including digital asset broker dealers, market makers, hedge funds, centralized and decentralized exchanges -  reduce risk, increase transparency, minimize costs and work towards compliance.</p>
<div className="qc-crm__bullets">
            <div className="qc-crm__bullets-item">
                <img src={ImgSetup} className="qc-crm__bullets-img" alt="img" />
                <p className="qc-crm__bullets-descr">
                Easy setup of trading configuration
                </p>
            </div>
            <div className="qc-crm__bullets-item">
                <img src={ImgReports} className="qc-crm__bullets-img" alt="img" />
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
                <img src={ImgSec} className="qc-crm__bullets-img" alt="img" />
                <p className="qc-crm__bullets-descr">
                Security system for api keys
                </p>
            </div>
        </div>
        </div>
        <div className="qc-crm__right">
            {/* <img src={SvgImgFreedom}/> */}
            <CrmImg />
        </div>
    </div>
)


export default CrmSection
