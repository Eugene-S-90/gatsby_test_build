
import React from "react"
import './how-it-works-section.css'

import Bullet1 from "../../images/qc-bullet-1.png"
import Bullet2 from "../../images/qc-bullet-2.png"
import Bullet3 from "../../images/qc-bullet-3.png"
import Bullet4 from "../../images/qc-bullet-4.png"
import Bullet5 from "../../images/qc-bullet-5.png"
import Bullet6 from "../../images/qc-bullet-6.png"


const HowItWorksSection = () => (
    <div className="qc-how-it-works">
        <h2 className="qc-how-it-works__title">How does it work?</h2>
        <div className="qc-how-it-works__wrapper">
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet1} alt="bullet" />
            {/* <p className="qc-how-it-works__descr">Development of the trading algorithm</p> */}
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet2} alt="bullet" /></div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet3} alt="bullet" /></div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet4} alt="bullet" /></div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet5} alt="bullet" /></div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet6} alt="bullet" /></div>
        </div>
    </div>
)


export default HowItWorksSection
