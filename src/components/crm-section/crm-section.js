
import React from "react"
import './crm-section.css'

import FreedomBg from "../../images/qc-freedom-bg.png"
import ImgSetup from "../../images/qc-Easy_Setup.svg"
import ImgReports from "../../images/qc-reports-bl.svg"
import ImgSec from "../../images/qc-Security.svg"
import ImgTelegram from "../../images/qc-Telegram.svg"

import SvgImgFreedom from "../../images/qc-freedom.svg"

import CrmImg from "../gatsby-images/gt-crm"



const CrmSection = () => (
    <div className="qc-crm" style={{
        backgroundImage: "url(" + FreedomBg + ")",
    }}>
        <div className="qc-crm__left">
            <h2 className="qc-crm__title">SAAS</h2>
            <p className="qc-crm__description">A powerful system that allows you to manage hundreds of algorithms without programming knowledge. You can quickly create new bots based on the algorithms that the developer has created, update configurations to the algorithms, and analyze trading sessions. SaaS greatly accelerates your efficiency and makes boring and monotonous work instead of you.</p>
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
        </div>
        </div>
        <div className="qc-crm__right">
            {/* <img src={SvgImgFreedom}/> */}
            <CrmImg />
        </div>
    </div>
)


export default CrmSection
