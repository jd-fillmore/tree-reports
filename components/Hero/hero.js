import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../Hero/hero.scss"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Hero</h2>
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

export default Hero
