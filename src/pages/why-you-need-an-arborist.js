import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Why = () => {
  return (
    <>
      <Helmet>
        <title>Why - Company</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero title="Why You Need An Arborist" description="description" />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <p>content</p>
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

export default Why
