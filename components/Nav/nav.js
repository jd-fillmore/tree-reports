import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import "../Nav/nav.scss"

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className="fixed-top" id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            logo
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/why-you-need-an-arborist" className="nav-link">
                Why You Need An Arborist
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/get-a-quote" className="nav-link">
                Get A Quote
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
