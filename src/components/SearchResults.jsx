// src/components/SearchResults.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/ProductList.scss'; 

function SearchResults() {
  const { term } = useParams();
  const [produtosEncontrados, setProdutosEncontrados] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/produtos/buscar?nome=${term}`);
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        const produtos = await response.json();
        setProdutosEncontrados(produtos);
      } catch (error) {
        console.error("Erro na busca:", error);
      }
    };
    fetchResults();
  }, [term]);

  return (
    <Container>
      <h4>Resultados da busca para: <strong>{term}</strong></h4>
      <Row>
        {produtosEncontrados.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${product.imagemProduto}`} // Mostrando a imagem como Base64
                alt={product.name}
              />
              <Card.Body>
                <Card.Title className='text-center'>{product.nome}</Card.Title>
                <Card.Text className='text-center'>{product.marca}</Card.Text>
                <Card.Text className='text-center'><storage> R$</storage> {product.preco}</Card.Text>
                <div className='d-flex justify-content-center'>
                  <Button variant="success">+</Button>
                </div >
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

}

export default SearchResults;
