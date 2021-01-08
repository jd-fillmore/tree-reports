import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Why = () => {
  return (
    <>
      <Helmet>
        <title>Why - TreeReports</title>
        <meta
          name="description"
          content="Arborists specialize in the care of individual trees. They are
                  knowledgeable about the needs of trees, and are trained and
                  equipped to provide proper care."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Why You Need An Arborist"
        description="Benefits for why you need an arborist"
      />
      <InnerContent>
        <section className="inner">
          <Container>
            {/* One */}
            <Row>
              <Col lg="12">
                <p>
                  Arborists specialize in the care of individual trees. They are
                  knowledgeable about the needs of trees, and are trained and
                  equipped to provide proper care. Hiring an arborist is a
                  decision that should not be taken lightly. Proper tree care is
                  an investment that can lead to substantial returns. Well
                  cared-for trees are attractive and can add considerable value
                  to your property. Poorly maintained trees can be a significant
                  liability. Pruning or removing trees, especially large trees,
                  can be dangerous work. Tree work should be done only by those
                  trained and equipped to work safely in trees.
                </p>
                <h2>What is a Certified Arborist?</h2>
                <p>
                  An arborist by definition is an individual who is trained in
                  the art and science of planting, caring for, and maintaining
                  individual trees. ISA arborist certification is a
                  nongovernmental, voluntary process by which individuals can
                  document their base of knowledge. Certified Arborists are
                  individuals who have achieved a level of knowledge in the art
                  and science of tree care through experience and by passing a
                  comprehensive examination developed by some of the nation’s
                  leading experts on tree care.
                </p>
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

export default Why
