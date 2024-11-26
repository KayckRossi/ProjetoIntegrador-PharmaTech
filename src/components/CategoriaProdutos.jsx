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
      <h2>Produtos da Categoria: {categoria}</h2>
      <Row>
        {produtos.map((produto) => (
          <Col md={3} key={produto.id} className="mb-4">
            <Card className='product-card'>
              <Card.Img variant="top" src={`data:image/png;base64,${produto.imagemProduto}`} alt={produto.nome} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.marca}</Card.Text>
                <Card.Text>Preço: R$ {produto.preco}</Card.Text>
                <Button variant="success">+</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategoriaProdutos;
