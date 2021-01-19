import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Infused = () => {
  return (
    <>
      <Helmet>
        <title>Infused - Tree Reports</title>
        <meta
          name="description"
          content="Uh oh! You've reached a page that doesn't exist."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Infused" />
      <InnerContent>
        <Container>
          {/* One */}
          <Row>
            <Col lg="12">
              <p>
                TreeReports hired Infused Agency to help build them a modern
                website. Along with this, they wanted to rank in Google for a
                few different local keywords. The idea was to get a reputable
                website up and running, but to also attract local clients.
                <br />
                <br />
                If you're a business looking for a new website, or you'd like to
                rank high in Google for more customers to find you which will
                lead to more revenue, contact one of the top{" "}
                <a href="https://infused.agency/">Niagara web design</a> and
                <a href="https://infused.agency/"> Niagara SEO</a> companies for
                a free quote today.
              </p>
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default Infused
