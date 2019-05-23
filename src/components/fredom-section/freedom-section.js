
import React from "react"
import './freedom-section.css'

import FreedomBg from "../../images/qc-freedom-bg.png"
import GoogleImg from "../../images/qc-google.png"
import GithubImg from "../../images/qc-github.png"
import TensorImg from "../../images/qc-tensor.png"

import SvgImgFreedom from "../../images/qc-freedom.svg"

import FreedomImg from "../gatsby-images/gt-freedom"



const FreedomSection = () => (
    <div className="qc-freedom" style={{
        backgroundImage: "url(" + FreedomBg + ")",
    }}>
        <div className="qc-freedom__left">
            <h2 className="qc-freedom__title">Freedom for developers</h2>
            <p className="qc-freedom__description">Engineers are no longer limited by the gatekeepers who create their dev environments. The Jupyter is an open-source technology that allows you to create live code, equations, visualizations and narrative text via a browser. More about Jupyter here</p>
            <div className="qc-freedom__bullets-wr">
                <div className="qc-freedom__bullets-item">
                    <img src={GoogleImg} className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Google cloud storage: when you logged into your google account, you will have the files stored in it available in JupuytedHub</p>
                </div>
                <div className="qc-freedom__bullets-item">
                    <img src={GithubImg} className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Code repository: source controle is crucial</p>
                </div>
                <div className="qc-freedom__bullets-item">
                    <img src={TensorImg} className="qc-freedom__bullets-img" alt="img" />
                    <p className="qc-freedom__bullets-description">Machine learnining: Tensorboard is integrated and allows you to develop your deep learning models and see reqults on tensorboard</p>
                </div>
            </div>
        </div>
        <div className="qc-freedom__right">
        <img src={SvgImgFreedom}/>
        {/* <FreedomImg/> */}
        </div>
    </div>
)


export default FreedomSection
