import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; // Certifique-se de que o contexto do carrinho está configurado
import '../assets/styles/ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Usa o contexto do carrinho

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/produtos');
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
            <Card className="product-card h-100">
              <div className="product-card-img-container">
              < Card.Img variant="top" src={product.imagemUrl} alt={product.nome} className="product-card-img"/>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <div className="product-info">
                  <Card.Title className="product-name">{product.nome}</Card.Title>
                  <Card.Text className="product-brand">{product.marca}</Card.Text>
                  <Card.Text className="product-price">R$ {product.preco.toFixed(2)}</Card.Text>
                </div>
                <Button
                  variant="success" className="mt-3"
                  onClick={() => addToCart({ ...product, quantidade: 1 })} // Adiciona o produto ao carrinho
                >
                  +
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
