import { useState } from 'react';
import logo from '../assets/images/url-shortener/logo.svg';
import { Button, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header py-5 container ${toggle ? 'visible' : ''}`}>
      <Navbar expand="lg" onToggle={e => setToggle(e)}>
        <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`${toggle ? 'visible__collapse' : ''}`}>
          <Nav className="mr-auto">
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Resources</Nav.Link>
          </Nav>
          <hr className={`d-lg-none ${toggle ? 'visible__border' : ''}`}/>
          <Nav className="align-items-center">
            <Nav.Link>Log In</Nav.Link>
            <Button className={`my-0 custom-button ${toggle ? 'visible__action' : ''}`}>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );

};

export default Header;