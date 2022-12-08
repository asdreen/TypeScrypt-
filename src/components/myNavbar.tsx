import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MyNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav>
            <div className="text-white">More News</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
