import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Ready to start your project?</h2>
              <p>Contact us today and we’ll get back to you with a quote.</p>
              <Link to="/get-started">
                <Button>Get A Quote</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
