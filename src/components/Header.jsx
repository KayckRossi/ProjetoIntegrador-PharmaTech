// src/components/Header.jsx

import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegListAlt, FaShoppingCart, FaThLarge, FaUser } from 'react-icons/fa';
import '../assets/styles/Header.scss';
import CartOffcanvas from './CartOffCanvas'; // Corrigir a importação
import LoginOffcanvas from './LoginOffcanvas';

function Header() {
  const [showLoginOffcanvas, setShowLoginOffcanvas] = useState(false);
  const [showCartOffcanvas, setShowCartOffcanvas] = useState(false);

  const handleLoginOffcanvasShow = () => setShowLoginOffcanvas(true);
  const handleLoginOffcanvasClose = () => setShowLoginOffcanvas(false);

  const handleCartOffcanvasShow = () => setShowCartOffcanvas(true);
  const handleCartOffcanvasClose = () => setShowCartOffcanvas(false);

  return (
    <>
      <Navbar expand="md" className="navbar-custom fixed-top" style={{ zIndex: 1030 }}>
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
            
            {/* Botão para abrir o Login Offcanvas com Ícone */}
            <Nav.Link as="div" className="nav-item mx-2 my-2 my-md-0" onClick={handleLoginOffcanvasShow} style={{ cursor: 'pointer' }}>
              <FaUser className="nav-icon" />
              <span>Entrar</span>
            </Nav.Link>

            {/* Botão para abrir o Carrinho Offcanvas com Ícone */}
            <Nav.Link as="div" className="nav-item mx-2 my-2 my-md-0" onClick={handleCartOffcanvasShow} style={{ cursor: 'pointer' }}>
              <FaShoppingCart className="nav-icon" />
              <span>Carrinho</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Login Offcanvas */}
      <LoginOffcanvas show={showLoginOffcanvas} handleClose={handleLoginOffcanvasClose} />

      {/* Cart Offcanvas */}
      <CartOffcanvas show={showCartOffcanvas} handleClose={handleCartOffcanvasClose} />
    </>
  );
}

export default Header;
