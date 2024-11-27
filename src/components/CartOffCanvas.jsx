import React, { useContext } from 'react';
import { Button, Form, Image, ListGroup, Offcanvas } from 'react-bootstrap';
import imageSemPedido from '../assets/images/imageDoOffCanvas.png';
import '../assets/styles/CartOffcanvas.scss';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

=======
import { CartContext } from '../context/CartContext'; // Certifique-se de que o contexto do carrinho está configurado
>>>>>>> 9818623b690d79a157ecb08afd1fe70395fd333b
function CartOffcanvas({ show, handleClose }) {
  const { cartItems, removeFromCart, updateQuantity, calculateSubtotal } = useContext(CartContext); // Usa o contexto do carrinho
  const navigate = useNavigate();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" animation>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cesta ({cartItems.length} itens)</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="cart-body">
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id} className="cart-item">
              <div className="cart-item-details">
                <Image src={imageSemPedido} rounded className="cart-item-image" />
                <div className="cart-item-info">
                  <h5>{item.nome}</h5>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-actions">
                <Form.Select
                  className="cart-item-quantity"
                  value={item.quantidade}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                >
                  {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Select>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="cart-footer mt-4">
          <div className="subtotal">
            <strong>Subtotal</strong>
            <span>R$ {calculateSubtotal().toFixed(2)}</span>
          </div>
          <Button variant="success" className="w-100 mb-2" onClick={() => {handleClose(); navigate("/checkout/cart");}}>
            Ir para carrinho
          </Button>
          <Button variant="outline-success" className="w-100" onClick={handleClose}>
            Continuar comprando
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartOffcanvas;
