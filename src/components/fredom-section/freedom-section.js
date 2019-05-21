
import React from "react"
import './freedom-section.css'

import Bullet1 from "../../images/qc-bullet-1.png"
import FreedomImg from "../gatsby-images/gt-freedom"



const FreedomSection = () => (
    <div className="qc-freedom">
        <div className="qc-freedom__left">
            <h2 className="qc-freedom__title">Freedom for developers</h2>
            <p className="qc-freedom__description">Engineers are no longer limited by the gatekeepers who create their dev environments. The Jupyter is an open-source technology that allows you to create live code, equations, visualizations and narrative text via a browser. More about Jupyter here</p>
            <div className="qc-freedom__bullets-wr">
                <div className="qc-freedom__bullets-item">
                    <img src="#" className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Google cloud storage: when you logged into your google account, you will have the files stored in it available in JupuytedHub</p>
                </div>
                <div className="qc-freedom__bullets-item">
                    <img src="#" className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Code repository: source controle is crucial</p>
                </div>
                <div className="qc-freedom__bullets-item">
                    <img src="#" className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Machine learnining: Tensorboard is integrated and allows you to develop your deep learning models and see reqults on tensorboard</p>
                </div>
            </div>
        </div>
        <div className="qc-freedom__right">
        <FreedomImg/>
        </div>
    </div>
)


export default FreedomSection
