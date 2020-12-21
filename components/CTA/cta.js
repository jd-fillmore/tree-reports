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
            <Col lg="12">
              <h2>CTA</h2>
              <p>Get in touch with us with what you'd like to accomplish.</p>
              <Link to="/get-started">
                <Button>Get Started</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
