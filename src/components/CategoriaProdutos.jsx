import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function CategoriaProdutos() {
  const { categoria } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/produtos/categoria?categoria=${categoria}`);
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos da categoria:", error);
      }
    };

    fetchProdutos();
  }, [categoria]);

  return (
    <Container className='product-list'>
      <h2 className="text-center mb-4"> Produtos da Categoria: {categoria}</h2>
      <Row className="justify-content-center">
        {produtos.map((produto) => (
          <Col xs={12} sm={6} md={3} lg={3} key={produto.id} className="d-flex justify-content-center mb-4">
            <Card className="product-card h-100">
              <div className="product-card-img-container">
              <Card.Img variant="top" src={`data:image/png;base64,${produto.imagemProduto}`} alt={produto.nome} className="product-card-img"/>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <div className="product-info">
                <Card.Title className="product-name">{produto.nome}</Card.Title>
                <Card.Text className="product-brand">{produto.marca}</Card.Text>
                <Card.Text className="product-price">Preço: R$ {produto.preco}</Card.Text>
                </div>
                <Button variant="success" className="mt-3">+</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoriaProdutos;
