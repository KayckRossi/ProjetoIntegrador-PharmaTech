// src/components/SearchResults.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import '../assets/styles/ProductList.scss'; 
import { useCart } from '../context/CartContext'; // Importa o contexto do carrinho

function SearchResults() {
  const { term } = useParams();
  const [produtosEncontrados, setProdutosEncontrados] = useState([]);
  const { addToCart } = useCart(); // Pega a função de adicionar ao carrinho do contexto

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
    <Container className='product-list'>
      <h4>Resultados da busca para: <strong>{term}</strong></h4>

      {produtosEncontrados.length === 0 && (
        <Alert variant="warning">
          Nenhum produto encontrado com esse nome
        </Alert>
      )}
      
      <Row>
        {produtosEncontrados.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="product-card h-100">
             <div className="product-card-img-container">
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${product.imagemProduto}`} // Mostrando a imagem como Base64
                alt={product.name}
                className="product-card-img"
              />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <div className="product-info">
                <Card.Title className="product-name">{product.nome}</Card.Title>
                <Card.Text className="product-brand">{product.marca}</Card.Text>
                <Card.Text className="product-price"><storage> R$</storage> {product.preco}</Card.Text>
                </div>
                  <Button variant="success" className="mt-3" onClick={() => addToCart(product)}>+</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

}

export default SearchResults;
