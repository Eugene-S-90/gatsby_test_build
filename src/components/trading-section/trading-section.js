
import React from "react"
import './trading-section.css'


import BitImg from "../../images/qc-bittrex.png"
import PolImg from "../../images/qc-poloniex.png"
import BinImg from "../../images/qc-binance.png"
import BitfImg from "../../images/qc-bitfinex.png"
import BgTradingImg from "../../images/qc-bg-trading.png"

import TradingImgSVG from "../../images/qc-trading.svg"

import TradingImg from "../gatsby-images/gt-trading"



const tradingSection = () => (
    <div className="qc-trading" style={{
        backgroundImage: "url(" +BgTradingImg+ ")",
    }}>
        <div className="qc-trading__left">
            <div className="qc-trading__img-wrapper">
            <img src={TradingImgSVG} alt="img"/>
                {/* <TradingImg /> */}
            </div>
        </div>
        <div className="qc-trading__right">
            <h2 className="qc-trading__title">Trading technology</h2>
            <p className="qc-trading__description">
                Catalyst python based library and very easy to learn. This technology allows trading strategies to be easily expressed and backtested against historical data, providing analytics and insights regarding a particular strategy’s performance. Also supports live-trading of crypto-assets starting with four exchanges. More about Catalyst <b>here</b>
            </p>
            <h4 className="qc-trading__support">Exchanges we support:</h4>
            <div className="qc-trading__exchanges">
                <img className="qc-trading__exchanges-img" src={BitImg} alt="img" />
                <img className="qc-trading__exchanges-img" src={PolImg} alt="img" />
                <img className="qc-trading__exchanges-img" src={BinImg} alt="img" />
                <img className="qc-trading__exchanges-img" src={BitfImg} alt="img" />
            </div>
        </div>
    </div>
)


export default tradingSection
