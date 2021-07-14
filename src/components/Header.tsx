import logo from '../assets/images/url-shortener/logo.svg';
import { Button, Navbar, Nav } from 'react-bootstrap';

const Header = () => {

  return (
    <header className="header py-5 container">
      <Navbar expand="lg">
        <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="header__collapse">
          <Nav className="mr-auto">
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Resources</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Resources</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Log In</Nav.Link>
            <Button>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );

};

export default Header;