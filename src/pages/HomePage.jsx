// src/components/HomePage.jsx

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../assets/styles/HomePage.scss';
import ProductList from '../components/ProductList';

function HomePage() {
  return (

  
    <Container fluid className="home-page">

  <div style={{ marginBottom: '120px' }}></div>
  
      {/* Botões de Informações */}
      <Row className="info-buttons mt-4">
        <Col md={3} className="text-center">
          <Card className="info-card">
            <Card.Body>
              <Card.Text>Receba em até 1 hora com a entrega rápida!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="text-center">
          <Card className="info-card">
            <Card.Body>
              <Card.Text>Ganhe pontos stix em suas compras.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="text-center">
          <Card className="info-card">
            <Card.Body>
              <Card.Text>Retire na farmácia em até 30min, grátis!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="text-center">
          <Card className="info-card">
            <Card.Body>
              <Card.Text>Descontos e benefícios em medicamentos.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Seção de Produtos Recomendados */}
      <Row className="recommended-products mt-5">
        <Col>
          <h3 className="text-center">Recomendados para você</h3>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;