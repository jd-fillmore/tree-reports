import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import PortfolioSlider from "../../components/PortfolioSlider/portfolioSlider"
import img from "../img/services.jpg"

const treeRemoval = [
  "Hazardous tree removal in tight spaces. We utilize modern, advanced rigging and climbing techniques, and a very well maintained fleet of trucks and equipment to complete your toughest projects safely and efficiently.",
  "Our professional and certified tree climbers have been trained and certified to ensure you receive optimum service.",
]

const treePruning = [
  "Every pruning job is different.  We put together a plan that is specific to your trees and property and make sure that all staff fully understand the importance of good communication with our clients.  We don’t take the responsibility of caring for your trees lightly, and will endeavor to make sure you are satisfied.",
  "Structural pruning is essential in developing a tree with a strong structure and desirable form. Trees that receive the appropriate pruning while young will require less corrective pruning as they mature.",
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - TreeReports</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Services"
        description="We offer a wide array of services at TreeReports. Click here to learn more."
      />
      <InnerContent>
        <section className="inner">
          <Container>
            <Row>
              <Col lg="6">
                <h4>Tree Removal</h4>
                <ul>
                  {treeRemoval.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
              <Col lg="6">
                <h4>Tree Pruning</h4>
                <ul>
                  {treePruning.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default Services
