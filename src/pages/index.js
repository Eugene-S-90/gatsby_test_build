
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

import ModalForm from  "../components/modal/modal"

import MediaQueries from "../components/media-queries/media-queries"

import Image from "../components/gatsby-images/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
      open: false
  };
  onOpenModal = () => {
      this.setState({ open: true });
  };

  onCloseModal = () => {
      this.setState({ open: false });
  };
  render() {
      const { open } = this.state;
      return (
        <Layout>
        <SEO title="QuantCloud" keywords={[`gatsby`, `application`, `react`]} />
        <MainScreen onOpenModal={this.onOpenModal} />
        <CardSection/>
        <HowItWorksSection onOpenModal={this.onOpenModal} />
        <FreedomSection/>
        <TradingSection/>
        <CrmSection/>
        <ReportsSection onOpenModal={this.onOpenModal}/>
        <MediaQueries/>
        <ModalForm open={open} closeModal={this.onCloseModal}/>
      </Layout>
      );
  }
}



export default IndexPage

