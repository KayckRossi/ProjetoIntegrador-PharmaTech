// src/components/Header.jsx

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaRegListAlt, FaShoppingCart, FaThLarge, FaUser } from 'react-icons/fa';
import '../assets/styles/Header.scss';
import CartOffcanvas from './CartOffCanvas';
import LoginOffcanvas from './LoginOffcanvas';

function Header() {
  const [showLoginOffcanvas, setShowLoginOffcanvas] = useState(false);
  const [showCartOffcanvas, setShowCartOffcanvas] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Funções para controle do Offcanvas
  const handleLoginOffcanvasShow = () => setShowLoginOffcanvas(true);
  const handleLoginOffcanvasClose = () => setShowLoginOffcanvas(false);

  const handleCartOffcanvasShow = () => setShowCartOffcanvas(true);
  const handleCartOffcanvasClose = () => setShowCartOffcanvas(false);

  // Função para buscar produtos
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/buscar/${searchTerm}`);
    }
  };

  return (
    <>
      <Navbar expand="md" className="navbar-custom fixed-top">
        <Container fluid className="navbar-container">
          {/* Logo da Farmácia */}
          <Navbar.Brand href="/" className="navbar-brand">
            PharmaTech
          </Navbar.Brand>

          {/* Barra de Pesquisa */}
          <Form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <FormControl
              type="search"
              placeholder="Buscar produtos..."
              className="form-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>Buscar</Button>
          </Form>

          {/* Navegação e Ícones */}
          <Nav className="nav-icons">
            {/* Dropdown Categorias */}
            <NavDropdown title={<><FaThLarge className="nav-icon" /> Categorias</>} id="nav-dropdown" className="nav-item">
              <NavDropdown.Item onClick={() => navigate(`/categoria/saude`)}>Saúde</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/categoria/beleza`)}>Beleza</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(`/categoria/medicamentos`)}>Medicamentos</NavDropdown.Item>
            </NavDropdown>

            {/* Link Meus Pedidos */}
            <Nav.Link href="/meus-pedidos" className="nav-item">
              <FaRegListAlt className="nav-icon" />
              <span>Meus Pedidos</span>
            </Nav.Link>

            {/* Login */}
            <Nav.Link as="div" className="nav-item" onClick={handleLoginOffcanvasShow} style={{ cursor: 'pointer' }}>
              <FaUser className="nav-icon" />
              <span>Entrar</span>
            </Nav.Link>

            {/* Carrinho */}
            <Nav.Link as="div" className="nav-item" onClick={handleCartOffcanvasShow} style={{ cursor: 'pointer' }}>
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
