import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.PNG';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#clubs" className={activeLink === "clubs" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("clubs")}>Підвали</Nav.Link>
            <Nav.Link href="#for-guests" className={activeLink === "for-guests" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("for-guests")}>Гостям</Nav.Link>
            <Nav.Link href="#for-specialists" className={activeLink === "for-specialists" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("for-specialists")}>Спеціалістам</Nav.Link>
            <Nav.Link href="#for-partners" className={activeLink === "for-partners" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("for-partners")}>Партнерам</Nav.Link>
            <Nav.Link href="#about-us" className={activeLink === "#about-us" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("#about-us")}>Про нас</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="socialImg"/></a>
              <a href=""><img src={navIcon2} alt="socialImg"/></a>
              <a href=""><img src={navIcon3} alt="socialImg"/></a>
            </div>
            <button className='vvd' onClick={() => console.log("connected")}> <span>Приєднатись</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar