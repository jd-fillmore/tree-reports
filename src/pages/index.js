import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Hero/hero"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/general.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Website Title</title>
        <meta name="description" content="Website description." />
      </Helmet>
      <Nav />
      <Hero />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
