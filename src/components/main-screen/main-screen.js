
import React, { Component } from "react"
import Modal from "react-responsive-modal";
import './main-screen.css'
import Nav from "../nav/nav"
import ScreenImg from "../gatsby-images/gt-screen"
import BgImg from "../../images/qc-bg.png"
// import Logo from "../gatsby-images/gt-logo"

import ModalForm from  "../modal/modal"

class MainScreen extends Component {
    render() {
        return (
            <div className="qc-main-screen" style={{
                backgroundImage: "url(" + BgImg + ")",
            }}>
                <Nav />
                <div className="qc-main-screen__content-wr">
                    <div className="qc-main-screen__left">
                        <h1 className="qc-main-screen__left-title">Full environment for algotrading team </h1>
                        <p className="qc-main-screen__left-description">Combining the development of algorithms, analisys and their use by single traders/funds/financial institutions</p>
                        <ModalForm/>
                    </div>
                    <div className="qc-main-screen__right">
                        <div className="qc-main-screen__right-img">
                            <ScreenImg />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default MainScreen
