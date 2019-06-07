
import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import MainScreen from "../components/main-screen/main-screen"
import CardSection from "../components/card-section/card-section"
import HowItWorksSection from "../components/how-it-work-section/how-it-work-section"
import FreedomSection from "../components/fredom-section/freedom-section"
import TradingSection from "../components/trading-section/trading-section"
import CrmSection from "../components/crm-section/crm-section"
import ReportsSection from "../components/reports-section/reports-section"

import ModalForm from "../components/modal-shedule/modal-shedule"
import ModalFormHireUs from "../components/modal-hire/modal-hire"

import MediaQueries from "../components/media-queries/media-queries"

import Image from "../components/gatsby-images/image"
import SEO from "../components/seo"

class IndexPage extends Component {
    state = {
        open: false,
        open_hire: false
    };
 // MODAL SHEDULE FORM
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
// MODAL SHEDULE FORM

// MODAL HIRE FORM
    onOpenModalHire = () => {
        this.setState({ open_hire: true });
    };
    onCloseModalHire = () => {
        this.setState({ open_hire: false });
    };
// MODAL HIRE FORM

    render() {
        const { open } = this.state;
        const { open_hire } = this.state;
        return (
            <Layout>
                <SEO title="QuantCloud" keywords={[`gatsby`, `application`, `react`]} />
                <MainScreen onOpenModal={this.onOpenModal} onOpenModalHire={this.onOpenModalHire} />
                <CardSection />
                <HowItWorksSection onOpenModal={this.onOpenModal} />
                <FreedomSection />
                <TradingSection />
                <CrmSection />
                <ReportsSection onOpenModal={this.onOpenModal} />
                <ModalForm open={open} closeModal={this.onCloseModal} />
                <ModalFormHireUs open={open_hire} closeModal={this.onCloseModalHire} />
                <MediaQueries />
            </Layout>
        );
    }
}



export default IndexPage

