import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../WhoWeAre/who-we-are.scss"

const WhoWeAre = ({
  title,
  author,
  description,
  imgAlt,
  imgAuthor,
  logos,
  logosAlt,
}) => {
  return (
    <>
      <section className="who-we-are">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="5">
              <img className="img-fluid" src={imgAuthor} alt={imgAlt} />
              <p id="author">{author}</p>
            </Col>
            <Col lg={{ size: 6, offset: 1 }}>
              <p>{description}</p>
              <img className="img-fluid" src={logos} alt={logosAlt} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WhoWeAre
