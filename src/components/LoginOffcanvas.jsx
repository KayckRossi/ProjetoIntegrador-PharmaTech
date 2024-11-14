// src/components/LoginOffcanvas.jsx

import React from 'react';
import { Button, Image, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirecionar
import welcomeImage from '../assets/images/imageDoOffCanvas.png';
import '../assets/styles/LoginOffcanvas.scss';

function LoginOffcanvas({ show, handleClose }) {
  const navigate = useNavigate(); // Hook para navegação

  const handleLoginClick = () => {
    handleClose(); // Fechar o offcanvas antes de navegar
    navigate('/login'); // Navegar para a página de login
  };

  const handleRegisterClick = () => {
    handleClose(); // Fechar o offcanvas antes de navegar
    navigate('/cadastro'); // Navegar para a página de cadastro
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton />
      <Offcanvas.Body className="text-center">
        <Image src={welcomeImage} rounded className="mb-4" style={{ width: '300px' }} />
        <h5>Seja bem-vindo, entre agora com a sua conta PharmaTech</h5>
        <Button variant="success" className="w-100 my-3" onClick={handleLoginClick}>
          Entrar na minha conta
        </Button>
        <Button variant="outline-success" className="w-100" onClick={handleRegisterClick}>
          Criar um novo cadastro
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginOffcanvas;
