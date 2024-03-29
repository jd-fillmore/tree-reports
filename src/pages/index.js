import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Hero/hero"
import WhoWeAre from "./../../components/WhoWeAre/whoWeAre"
import Why from "../../components/Why/why"
import Communities from "../../components/Communities/communities"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import imgAuthor from "../img/certified-consulting-arborist-niagara.png"
import logos from "../img/logos.jpg"
import whyImg from "../img/why.svg"
import howImg from "../img/how.svg"
import citiesImg from "../img/cities.jpg"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/general.scss"
import "../scss/typography.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Certified Consulting Arborists in Niagara Region - TreeReports
        </title>
        <meta
          name="description"
          content="Niagara's certified consulting arborists. Connect today with TreeReports for fast turnaround times. Over 25 years experience."
        />
      </Helmet>
      <Nav />
      <Hero
        title="Certified Arborists in Niagara Region"
        subtitle="We cover all of your arborist needs in Niagara &amp; beyond."
        btnText="Get A Quote"
        btnLink="get-a-quote"
      />
      <WhoWeAre
        title={[<span>Who</span>, "We Are"]}
        logos={logos}
        logosAlt="certified arborist niagara"
        imgAuthor={imgAuthor}
        imgAlt="certified consulting support arborist in niagara"
        author="Harry Althorpe, Owner | TreeReports"
        description={[
          "Tree Reports - Tree Removal, Tree Pruning and Arborist Reports. Over 25 years experience in the municipal, utility, and private sectors.",
          <br />,
          <br />,
          "Very fast turnaround times for Tree Services and Consulting in Burlington and the Niagara Region",
        ]}
        mandate="ON-1202 AM"
      />
      <section className="why">
        <Container>
          <Row>
            <Col lg="6">
              <Why
                title={[<span>Why</span>, "You Need An Arborist"]}
                desc="An ISA Certified TRAQ Arborist is the fundamental part of any successful tree related project."
                btnText="Learn Why"
                btnLink="/why-you-need-an-arborist"
                img={whyImg}
                imgAlt="niagara arborist support"
              />
            </Col>
            <Col lg="6">
              <Why
                title={[<span>How</span>, "We Can Help"]}
                desc="TreeReports covers the full spectrum of all your Arboriculture needs."
                btnText="Learn How"
                btnLink="/about"
                img={howImg}
                imgAlt="niagara arborist"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Communities
        title={[<span>We</span>, "Serve Some Great Communities"]}
        img={citiesImg}
        imgAlt="niagara arborist support cities"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
