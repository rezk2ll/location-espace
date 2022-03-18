import React from 'react'
import {Navbar,Container,Nav,Offcanvas} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <header>
     <Navbar bg="light" expand={false}>
  <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Location Espaces Libre</Offcanvas.Title> 
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to={"/"}> Accueil </Link> 
          <Link to={"/annonce"}> Annonce </Link> 
          <Link to={"/contact"}> Contact </Link> 
          <Link to={'/user/signin'}> Créer un Compte </Link> 
          <Link to={'/user/signup'}>  Se connecter </Link> 
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </header>
  )
}

export default Navigation