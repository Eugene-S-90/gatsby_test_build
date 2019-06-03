
import React from "react"
import './reports-section.css'


import ImgGrapg from "../../images/qc-graph.svg"
import ImgList from "../../images/qc-list.svg"
import ImgTax from "../../images/qc-tax.svg"
import ImgPort from "../../images/qc-port.svg"
import ImgRisk from "../../images/qc-risk.svg"


import BgTradingImg from "../../images/qc-bg-trading.png"

import ReportsImg from "../gatsby-images/gt-reports"



const ReportsSection = () => (
    <div className="qc-reports" style={{
        backgroundImage: "url(" +BgTradingImg+ ")",
    }}>
        <div className="qc-reports__left">
            <div className="qc-reports__img-wrapper">
                <ReportsImg />
            </div>
        </div>
        <div className="qc-reports__right">
            <h2 className="qc-reports__title">Reports</h2>
            <p className="qc-reports__description">
            Quantcloud provides real-time reports of your trading. Bring clarity to the macro and micro performance of your overall portfolio and individual holdings. 
            </p>
            <div className="qc-reports__bullets">
            <div className="qc-reports__bullets-item">
                <img src={ImgGrapg} className="qc-reports__bullets-img" alt="img" />
                <p className="qc-reports__bullets-descr">
                Profit / loss reports
                </p>
            </div>
            <div className="qc-reports__bullets-item">
                <img src={ImgPort} className="qc-reports__bullets-img " alt="img" />
                <p className="qc-reports__bullets-descr">
                Sub-portfolios
                </p>
            </div>
            <div className="qc-reports__bullets-item">
                <img src={ImgList} className="qc-reports__bullets-img" alt="img" />
                <p className="qc-reports__bullets-descr">
                List of all trades and fees
                </p>
            </div>
            <div className="qc-reports__bullets-item">
                <img src={ImgTax} className="qc-reports__bullets-img " alt="img" />
                <p className="qc-reports__bullets-descr">
                12 tax declaration methods
                </p>
            </div>
            <div className="qc-reports__bullets-item">
                <img src={ImgRisk} className="qc-reports__bullets-img " alt="img" />
                <p className="qc-reports__bullets-descr">
                Risk profiles
                </p>
            </div>
        </div>
        <a href="#" className="qc-reports-btn">Shedule a demo</a>
        </div>
    </div>
)


export default ReportsSection
