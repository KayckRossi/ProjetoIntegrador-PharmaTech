import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../assets/styles/ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products'); 
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="product-list">
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="success">+</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
