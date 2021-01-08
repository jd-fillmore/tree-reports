import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import imgAuthor from "../img/certified-consulting-arborist-niagara.png"
import "../scss/about.scss"

const creds = [
  "ISA Certified Arborist, Tree Worker, and Municipal Specialist",
  "Arboriculture & Municipal By-Law Graduate",
  "Journeyman Utility Arborist",
  "Qualified Tree Risk Assessor",
  "Former Municipal Tree By Law Officer and Supervisor of Forestry",
]

const why = [
  "Reports are our only focus. We have the fastest turnaround times available in the industry",
  "Locally owned and operated.  High quality, guaranteed work",
  "Thorough understanding of municipal by-laws, policies and procedures",
  "Upfront transparent pricing and deliverable",
]

const links = [
  {
    id: 1,
    linkText: "ISA Arbor",
    link: "https://www.isa-arbor.com/",
  },
  {
    id: 2,
    linkText: "Why Hire An Arborist",
    link: "https://www.treesaregood.org/treeowner/whyhireanarborist",
  },
]

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - TreeReports</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="About"
        description="A brief look at the history of TreeReports"
      />
      <InnerContent>
        <section className="inner about">
          <Container>
            <Row>
              <Col lg="5">
                <img
                  className="img-fluid"
                  src={imgAuthor}
                  alt="Harry Althorpe"
                />
                <p id="author">Harry Althorpe, Owner | TreeReports</p>
              </Col>
              <Col lg={{ size: 6, offset: 1 }}>
                <p>
                  Harry Althorpe is the Senior Consulting Arborist and has over
                  25 years experience in the field of arboriculture. He is a
                  graduate of Niagara &amp; Humber Colleges, and has been a
                  certified arborist since 2002. Harry grew up in the Niagara
                  Region and currently lives in St Catharines Ontario.
                </p>
                <p>
                  <strong>Links</strong>
                </p>
                <ul>
                  {links.map(i => (
                    <li>
                      <a
                        id="links"
                        href={i.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {i.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h4>Credential Highlights</h4>
                <ul>
                  {creds.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
              <Col lg="6">
                <h4>Why Hire Us?</h4>
                <ul>
                  {why.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default About
