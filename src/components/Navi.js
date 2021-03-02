import React, { useState } from "react";
import { MDBCol } from "mdbreact";
import { Link,useHistory } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history=useHistory();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">StackOwerClone</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <MDBCol md="12">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBCol>
            <NavItem>
              <Button size="sm" color="white">
                <Link to="question">Questions</Link>
              </Button>
            </NavItem>

            <NavItem>
              <Button size="sm" color="white">
                <Link to="/login">Login</Link>
              </Button>
            </NavItem>

            <NavItem>
              <Button size="sm" color="white">
                <Link to="signup">Signup</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button size="sm" color="white" onClick={()=>console.log(document.cookie.split("=")[1])}>
                Profile
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
