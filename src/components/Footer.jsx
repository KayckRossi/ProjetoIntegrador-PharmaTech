// src/components/Footer.jsx

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>PharmaTech</h5>
            <p>Melhorando sua saúde e bem-estar com soluções tecnológicas.</p>
          </Col>
          <Col md={4} className="footer-col text-center">
            <h5>Links Rápidos</h5>
            <ul className="footer-links">
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col text-right">
            <h5>Contato</h5>
            <p>Email: contato@pharmatech.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} PharmaTech. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
