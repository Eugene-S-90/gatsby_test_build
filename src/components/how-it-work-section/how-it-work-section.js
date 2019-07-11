
import React from "react"
import './how-it-works-section.css'

import Bullet1 from "../../images/qc-bullet-1.svg"
import Bullet2 from "../../images/qc-bullet-2.svg"
import Bullet3 from "../../images/qc-bullet-3.svg"
import Bullet4 from "../../images/qc-bullet-4.svg"
import Bullet5 from "../../images/qc-bullet-5.svg"
import Bullet6 from "../../images/qc-bullet-6.svg"


const HowItWorksSection = (props) => (
    <div className="qc-how-it-works">
        <h2 className="qc-how-it-works__title">How does it work?</h2>
        <div className="qc-how-it-works__wrapper">
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet6} alt="bullet" />
                <p className="qc-how-it-works__descr">Development of the <br/>trading algorithm</p>
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet5} alt="bullet" />
            <p className="qc-how-it-works__descr">Testing for historical<br/> data </p>
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet4} alt="bullet" />
            <p className="qc-how-it-works__descr">Optimization</p>
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet3} alt="bullet" />
            <p className="qc-how-it-works__descr">Ready-to-use<br/> algorithm </p>
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet2} alt="bullet" />
            <p className="qc-how-it-works__descr">Algo-trading<br/> management</p>
            </div>
            <div class="qc-how-it-works__img-wr"><img className="qc-how-it-works__img" src={Bullet1} alt="bullet" />
            <p className="qc-how-it-works__descr">Auto-reports</p>
            </div>
        </div>
        <a href="#" class="qc-how-it-works__btn " onClick={props.onOpenModal}>Make a request</a>
    </div>
)


export default HowItWorksSection
