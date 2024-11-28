import React, { useContext } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "../assets/styles/CheckoutPage.scss";
import { useAuth } from '../context/AuthContext';
import { CartContext } from "../context/CartContext";

function CheckoutPage() {
  const { cartItems, updateQuantity, calculateSubtotal } = useContext(CartContext);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const handleFinalizarCompra = async () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const { value: formValues } = await Swal.fire({
        title: 'Finalizar Compra',
        html:
          `<div>
            <label>Endereço:</label>
            <input id="swal-input1" class="swal2-input" value="${user.endereco}" disabled>
          </div>
          <div>
            <label>Forma de Pagamento:</label>
            <select id="swal-input2" class="swal2-input">
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Boleto Bancário">Boleto Bancário</option>
              <option value="Pix">Pix</option>
            </select>
          </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return {
            endereco: document.getElementById('swal-input1').value,
            formaPagamento: document.getElementById('swal-input2').value,
          };
        },
        confirmButtonColor: '#004085',
        confirmButtonText: 'Confirmar Compra'
      });

      if (formValues) {
        try {
          const response = await fetch('http://localhost:8080/api/pedidos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clienteId: user.id,
              produtos: cartItems.map((item) => ({
                produtoId: item.id,
                quantidade: item.quantidade,
              })),
              endereco: formValues.endereco,
              formaPagamento: formValues.formaPagamento,
              valorTotal: calculateSubtotal(),
            }),
          });

          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: 'Compra finalizada com sucesso!',
              confirmButtonColor: '#004085',
            }).then(() => {
              navigate('/meus-pedidos');
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Erro ao finalizar a compra',
              text: 'Por favor, tente novamente.',
              confirmButtonColor: '#004085',
            });
          }
        } catch (error) {
          console.error('Erro ao finalizar a compra:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erro ao finalizar a compra',
            text: 'Por favor, tente novamente.',
            confirmButtonColor: '#004085',
          });
        }
      }
    }
  };

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
        <Button onClick={handleFinalizarCompra} className="success">
          Finalizar Compra
        </Button>
      </div>
    </Container>
  );
}

export default CheckoutPage;
