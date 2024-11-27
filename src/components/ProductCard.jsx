import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.imagemUrl} alt={product.name} />
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
        <Button variant="success" onClick={handleAddToCart}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
