import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const pages = [
  {
    name: "link",
    link: "/link",
  },
  {
    name: "link",
    link: "/link",
  },
  {
    name: "link",
    link: "/link",
  },
]

const services = [
  {
    name: "link",
    link: "/link",
  },
  {
    name: "link",
    link: "/link",
  },
  {
    name: "link",
    link: "/link",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h3>About</h3>
              <p>description</p>
            </Col>
            <Col lg="3">
              <h3>Pages</h3>
              <ul>
                {pages.map(page => (
                  <li>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Services</h3>
              <ul>
                {services.map(service => (
                  <li>
                    <Link to={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/get-started">Get Started</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
