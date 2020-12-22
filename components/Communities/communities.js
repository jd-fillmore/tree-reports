import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../Communities/communities.scss"

const Communities = ({ title, img, imgAlt }) => {
  return (
    <>
      <section className="communities">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>{title}</h2>
              <img className="img-fluid" src={img} alt={imgAlt} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Communities
