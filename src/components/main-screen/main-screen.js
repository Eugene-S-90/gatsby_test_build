
import React from "react"
import './main-screen.css'
import Nav from "../nav/nav"
import ScreenImg from "../gatsby-images/gt-screen"
import BgImg from "../../images/qt-bg.png"
// import Logo from "../gatsby-images/gt-logo"

const MainScreen = () => (
    <div className="qt-main-screen" style={{
        backgroundImage: "url(" + BgImg + ")",
    }}>
        <Nav />
        <div className="qt-main-screen__content-wr">
            <div className="qt-main-screen__left">
                <h1 className="qt-main-screen__left-title">Full environment for algotrading team </h1>
                <p className="qt-main-screen__left-description">Combining the development of algorithms, analisys and their use by single traders/funds/financial institutions</p>
                <a className="qt-main-screen__left-btn">Shedule a demo</a>
            </div>
            <div className="qt-main-screen__right">
                <div className="qt-main-screen__right-img">
                    <ScreenImg />
                </div>
            </div>
        </div>
    </div>
)


export default MainScreen
