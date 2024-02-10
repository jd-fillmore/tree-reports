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
    name: "Consulting",
    link: "/consulting",
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
                Our Certified Consulting Arborists possess a wealth of knowledge
                to cover all your urban forestry needs.{" "}
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
                  <a href="mailto:office@treereports.ca">
                    office@treereports.ca
                  </a>
                </li>
                <li>
                  <a href="tel:289-686-2331">289-686-2331</a>
                </li>
                <li>
                  <Link to="/get-a-quote">Get A Quote</Link>
                </li>
              </ul>
              <p>&copy; 2021 TreeReports. All Rights Reserved.</p>
              <p>
                <a href="https://infused.agency">Niagara web design</a> by
                Infused Agency
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
                  <p style={{ fontSize: '12px' }}>
                  Website by Infused Agency |{" "}
                  <a href="https://infused.agency" target="_blank" title="Web Design St. Catharines">
                    Web Design St. Catharines
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency" target="_blank" title="Web Design Grimsby">
                    Web Design Grimsby
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/beamsville-web-design" target="_blank" title="Web Design Beamsville">
                    Web Design Beamsville
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/web-design-welland" target="_blank" title="Web Design Welland">
                    Web Design Welland
                  </a>{" "}
                  |{" "}
                  <a href="https://infused.agency/fort-erie-web-design" target="_blank" title="Web Design Fort Erie">
                    Web Design Fort Erie
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://infused.agency/port-colborne-web-design"
                    target="_blank"
                    title="Web Design Port Colborne"
                  >
                    Web Design Port Colborne
                  </a>
                </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
