import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const GetAQuote = () => {
  return (
    <>
      <Helmet>
        <title>Get A Quote - TreeReports</title>
        <meta name="description" content="description" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Get A Quote"
        description="Please fill out the form and we'll get back to you as soon as
                  we can."
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div class="form-group">
                    <input
                      name="name"
                      type="name"
                      class="form-control"
                      id="Name"
                      aria-describedby="namehelp"
                      placeholder="Full Name"
                      aria-label="name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="Email"
                      placeholder="Email"
                      aria-label="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="phone"
                      type="phone"
                      class="form-control"
                      id="Phone"
                      aria-describedby="urlhelp"
                      placeholder="Cell Phone Number"
                      aria-label="phone"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="city"
                      type="city"
                      class="form-control"
                      id="City"
                      aria-describedby="namehelp"
                      placeholder="City"
                      aria-label="city"
                    />
                  </div>
                  <div class="form-group">
                    <select name="" id="">
                      <option value="choose">Please select a service</option>
                      <option value="arborist reports">Arborist Reports</option>
                      <option value="Tree Protection Plans & Preservation">
                        Tree Protection Plans & Preservation
                      </option>
                      <option value="Tree Risk & Health Assessments">
                        Tree Risk & Health Assessments
                      </option>
                      <option value="Site Monitoring & Management">
                        Site Monitoring & Management
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="Message"
                      rows="3"
                      placeholder="How can we help you?"
                      aria-label="how can we help"
                    ></textarea>
                  </div>
                  <button type="submit">Submit</button>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </form>
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

export default GetAQuote
