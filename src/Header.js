import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-transparent">
      <LinkContainer to="/">
        <Navbar.Brand className="navbar-logo">INSOMNIA</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
        </Nav>
        <div className="nav-right-section">
          <LinkContainer to="/contact">
            <Button variant="outline-light" className="btn-discover-more">
              Started Now
            </Button>
          </LinkContainer>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
