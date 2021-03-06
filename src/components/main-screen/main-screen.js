
import React, { Component } from "react"
import './main-screen.css'
import Nav from "../nav/nav"
import ScreenImg from "../gatsby-images/gt-screen"
import ScreenImgSVG from "../../images/qc-screen.svg"
import BgImg from "../../images/qc-bg.png"

const MainScreen = (props) => (
            <div className="qc-main-screen" style={{
                backgroundImage: "url(" + BgImg + ")",
            }}>
                <Nav onOpenModalHire={props.onOpenModalHire}/>
                <div className="qc-main-screen__content-wr">
                    <div className="qc-main-screen__left">
                        <h1 className="qc-main-screen__left-title">Full environment for algotrading team </h1>
                        <p className="qc-main-screen__left-description">Combining the development of algorithms, analisys and their use by single traders/funds/financial institutions</p>
                        <a href="#" className="qc-main-screen__left-btn" onClick={props.onOpenModal}>Shedule a demo</a>
                    </div>
                    <div className="qc-main-screen__right">
                        <div className="qc-main-screen__right-img">
                        <img src={ScreenImgSVG}/>
                             {/* <ScreenImg /> */}
                        </div>
                    </div>
                </div>
            </div>
)



export default MainScreen
