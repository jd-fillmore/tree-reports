import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../Hero/hero.scss"

const Hero = ({ title, subtitle, btnText, btnLink }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="12">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <Link to={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
