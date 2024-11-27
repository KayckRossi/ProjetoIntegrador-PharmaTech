// src/components/LoginOffcanvas.jsx

import React from 'react';
import { Button, Image, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirecionar
import welcomeImage from '../assets/images/imageDoOffCanvas.png';
import '../assets/styles/LoginOffcanvas.scss';

function LoginOffcanvas({ show, handleClose }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    handleClose();
    navigate('/login');
  };

  const handleRegisterClick = () => {
    handleClose();
    navigate('/cadastro');
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton />
      <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center text-center">
        {/* Imagem */}
        <Image
          src={welcomeImage}
          alt="Bem-vindo"
          className="mb-4"
          style={{ maxWidth: '80%', height: 'auto' }}
        />
        {/* Texto de boas-vindas */}
        <h5 className="mb-4">
          Seja bem-vindo, entre agora com a sua conta PharmaTech
        </h5>
        {/* Botões */}
        <Button
          variant="success"
          className="w-100 mb-3"
          onClick={handleLoginClick}
        >
          Entrar na minha conta
        </Button>
        <Button
          variant="outline-success"
          className="w-100"
          onClick={handleRegisterClick}
        >
          Criar um novo cadastro
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginOffcanvas;