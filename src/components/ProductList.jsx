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
            <Card className="product-card">
              <Card.Img variant="top" src={product.imagemUrl} alt={product.nome} />
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text>{product.marca}</Card.Text>
                <Card.Text>R$ {product.preco.toFixed(2)}</Card.Text>
                <Button
                  variant="success"
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
