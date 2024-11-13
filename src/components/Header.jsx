// src/components/Header.jsx

import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegListAlt, FaShoppingCart, FaThLarge, FaUser } from 'react-icons/fa';
import '../assets/styles/Header.scss';
import LoginOffcanvas from './LoginOffcanvas';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar expand="md" className="navbar-custom fixed-top" expanded={expanded} style={{ zIndex: 1030 }}>
        <Container fluid>
          {/* Nome da Farmácia */}
          <Navbar.Brand href="/" className="navbar-brand">
            PharmaTech
          </Navbar.Brand>

          {/* Barra de Pesquisa */}
          <Form className="d-flex search-form mx-auto d-none d-lg-flex">
            <FormControl
              type="search"
              placeholder="Buscar produtos..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>

          {/* Ícones com Textos */}
          <Nav className="align-items-center ms-auto">
            {/* Dropdown Menu com Ícone */}
            <NavDropdown title={<><FaThLarge className="nav-icon" /> Categorias</>} id="nav-dropdown" className="nav-item mx-2 my-2 my-md-0">
              <NavDropdown.Item href="/saude">Saúde</NavDropdown.Item>
              <NavDropdown.Item href="/beleza">Beleza</NavDropdown.Item>
              <NavDropdown.Item href="/vitaminas">Vitaminas e Suplementos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/meus-pedidos" className="nav-item mx-2 my-2 my-md-0">
              <FaRegListAlt className="nav-icon" />
              <span>Meus Pedidos</span>
            </Nav.Link>
            
            {/* Botão para abrir o Offcanvas com Ícone */}
            <Nav.Link as="div" className="nav-item mx-2 my-2 my-md-0" onClick={handleOffcanvasShow} style={{ cursor: 'pointer' }}>
              <FaUser className="nav-icon" />
              <span>Entrar</span>
            </Nav.Link>

            <Nav.Link href="/carrinho" className="nav-item mx-2 my-2 my-md-0">
              <FaShoppingCart className="nav-icon" />
              <span>Carrinho</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Login Offcanvas */}
      <LoginOffcanvas show={showOffcanvas} handleClose={handleOffcanvasClose} />
    </>
  );
}

export default Header;
