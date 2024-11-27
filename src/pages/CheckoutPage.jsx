// src/pages/CheckoutPage.jsx

import React, { useContext } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../assets/styles/CheckoutPage.scss";
import { useAuth } from '../context/AuthContext';

function CheckoutPage() {
  const { cartItems, updateQuantity, calculateSubtotal } = useContext(CartContext);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleFinalizarCompra = () => {

    if (!isAuthenticated) {
        navigate('/login')
    } else {
        alert('Compra finalizada com sucesso!');
    }
  }

  return (
    <Container className="checkout-page my-4">
      <h2>Resumo do Carrinho</h2>
      <Table responsive className="checkout-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="product-details">
                  <img src={item.imagemUrl} alt={item.nome} className="product-image" />
                  <div>
                    <strong>{item.nome}</strong>
                    <p>{item.marca}</p>
                  </div>
                </div>
              </td>
              <td>
                <Form.Select
                  value={item.quantidade}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="checkout-summary">
        <div className="total">
          <strong>Total:</strong>
          <h3>R$ {calculateSubtotal().toFixed(2)}</h3>
        </div>
      </div>

      <div className="checkout-actions">
        <Button
          variant="outline-success"
          className="me-2"
          onClick={() => navigate("/")}
        >
          Continuar Comprando
        </Button>
        <Button onClick={handleFinalizarCompra} className="success">Finalizar Compra</Button>
      </div>
    </Container>
  );
}

export default CheckoutPage;
