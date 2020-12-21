import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "../Nav/nav.scss"

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            logo
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Link
              </DropdownToggle>
              <DropdownMenu right className="animate slideIn">
                <Link to="#">
                  <DropdownItem>Link</DropdownItem>
                </Link>
                <Link to="#">
                  <DropdownItem>Link</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Link
              </DropdownToggle>
              <DropdownMenu right className="animate slideIn">
                <Link to="#">
                  <DropdownItem>Link</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="#" className="nav-link">
                Link
              </Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">
                Link
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
