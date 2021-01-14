import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const pages = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Why You Need An Arborist",
    link: "/why-you-need-an-arborist",
  },
  {
    name: "Get A Quote",
    link: "/get-a-quote",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h5>About</h5>
              <p>
                Here at TreeReports we offer the full spectrum of consulting
                services in the field of arboriculture. We are committed to
                providing unparalleled customer service to all of our clients.
                Our Registered Consulting Arborist possesses a wealth of
                knowledge to cover all your consulting arborist needs.{" "}
              </p>
              <a className="ig" href="https://www.instagram.com/treereports/">
                Follow us on Instagram
              </a>
            </Col>
            <Col lg="3">
              <h5>Pages</h5>
              <ul>
                {pages.map(page => (
                  <li>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="4">
              <h5>Contact</h5>
              <ul>
                <li>
                  <Link to="/get-a-quote">Get A Quote</Link>
                </li>
              </ul>
              <p>&copy; 2021 TreeReports. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
