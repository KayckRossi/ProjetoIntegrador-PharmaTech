// src/components/CartOffCanvas.jsx

import React from 'react';
import { Button, Form, Image, ListGroup, Offcanvas } from 'react-bootstrap'; // Importar Form corretamente
import '../assets/styles/CartOffcanvas.scss';

function CartOffcanvas({ show, handleClose }) {
  // Dados fictícios para exibir no carrinho
  const cartItems = [
    {
      id: 1,
      name: 'Adesivo Salonpas Grande 4 unidades',
      price: 'R$ 14,49',
      image: 'https://via.placeholder.com/80',
      quantity: 1,
    },
  ];

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cesta</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="cart-body">
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="cart-item">
              <div className="cart-item-details">
                <Image src={item.image} rounded className="cart-item-image" />
                <div className="cart-item-info">
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>
                </div>
              </div>
              <Form.Select className="cart-item-quantity" defaultValue={item.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="cart-footer mt-4">
          <div className="subtotal">
            <strong>Subtotal</strong>
            <span>R$ 14,49</span>
          </div>
          <Button variant="danger" className="w-100 mb-2">
            Ir para cesta
          </Button>
          <Button variant="outline-danger" className="w-100">
            Continuar comprando
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffcanvas;
