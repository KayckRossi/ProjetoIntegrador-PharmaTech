// src/components/Header.jsx

import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaRegListAlt, FaShoppingCart } from 'react-icons/fa';
import '../assets/styles/Header.scss';
import LoginOffcanvas from './LoginOffcanvas';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-custom" expanded={expanded}>
      <Container>
        {/* Menu Hamburguer */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)} 
        />
        
        {/* Nome da Farmácia */}
        <Navbar.Brand href="/" className="navbar-brand">
          PharmaTech
        </Navbar.Brand>

        {/* Barra de Pesquisa */}
        <Form className="d-flex search-form">
          <FormControl
            type="search"
            placeholder="Buscar produtos..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>

        {/* Ícones com Textos */}
        <Nav className="ml-auto">
          <Nav.Link href="/meus-pedidos" className="nav-item">
            <FaRegListAlt className="nav-icon" />
            <span>Meus Pedidos</span>
          </Nav.Link>
          
          {/* Botão para abrir o Offcanvas */}
          <LoginOffcanvas />

          <Nav.Link href="/carrinho" className="nav-item">
            <FaShoppingCart className="nav-icon" />
            <span>Carrinho</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
