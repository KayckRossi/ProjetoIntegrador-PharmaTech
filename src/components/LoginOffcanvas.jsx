// src/components/LoginOffcanvas.jsx

import React, { useState } from 'react';
import { Button, Image, Offcanvas } from 'react-bootstrap';
import welcomeImage from '../assets/iamges/imageDoOffCanvas.png'; // Altere o caminho da imagem conforme necessário
import '../assets/styles/LoginOffcanvas.scss'; // Adicione um arquivo de estilo para personalizar se necessário

function LoginOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Botão para abrir o Offcanvas */}
      <Button variant="link" className="nav-item" onClick={handleShow}>
        <span>Entrar</span>
      </Button>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <Image src={welcomeImage} rounded className="mb-4" style={{ width: '300px' }} />
          <h5>Seja bem-vindo, entre agora com a sua conta PharmaTech</h5>
          <Button variant="success" className="w-100 my-3">Entrar na minha conta</Button>
          <Button variant="outline-success" className="w-100">Criar um novo cadastro</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LoginOffcanvas;
