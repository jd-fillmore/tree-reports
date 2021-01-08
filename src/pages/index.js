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
          Certified Consulting Arborist in Niagara Region - TreeReports
        </title>
        <meta
          name="description"
          content="Niagara's certified consulting arborist. Connect today with TreeReports for fast turnaround times. Over 25 years experience."
        />
      </Helmet>
      <Nav />
      <Hero
        title="Certified Consulting Arborist in Niagara Region"
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
          "Tree Reports - That's all we do!  Arborist Reports, Tree Protection Plans and Consulting.  Over 25 years experience in the municipal, utility, and private sectors.",
          <br />,
          <br />,
          "Fastest turnaround times for Arborist Reports and Consulting services in Burlington and the Niagara Region.",
        ]}
      />
      <section className="why">
        <Container>
          <Row>
            <Col lg="6">
              <Why
                title={[<span>Why</span>, "You Need An Arborist"]}
                desc="An ASCA Registered Consulting Arborist (RCA) is the foremost authority with respect to our urban forest"
                btnText="Learn Why"
                btnLink="/why-you-need-an-arborist"
                img={whyImg}
                imgAlt="niagara arborist support"
              />
            </Col>
            <Col lg="6">
              <Why
                title={[<span>How</span>, "We Can Help"]}
                desc="TreeReports covers the full spectrum of all your consulting arborist needs. "
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
