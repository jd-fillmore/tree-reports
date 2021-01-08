import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const serviceOne = [
  "Tree inventories",
  "Health and condition ratings",
  "Recommendations for free care",
  "Tree appraisal",
]

const serviceTwo = [
  "Municipal by law and planning considerations",
  "Tree protection methodology and requirements",
]

const serviceThree = [
  "Basic and advanced techniques",
  "Likelihood of failure and target assessments, mitigation options",
]

const serviceFour = [
  "On site Arborist services during construction activities",
  "Tree Protection Zone establishment and control",
  "Scope of Work auditing and evaluation",
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
        description="We offer a wide array of services at TreeReports"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="4">
                <h4>Arborist Reports</h4>
                <ul>
                  {serviceOne.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
              <Col lg="4">
                <h4>Tree Protection Plans &amp; Preservation</h4>
                <ul>
                  {serviceTwo.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
              <Col lg="4">
                <h4>Tree Risk &amp; Health Assessments</h4>
                <ul>
                  {serviceThree.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h4>Site Monitoring &amp; Management</h4>
                <ul>
                  {serviceFour.map(i => (
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
