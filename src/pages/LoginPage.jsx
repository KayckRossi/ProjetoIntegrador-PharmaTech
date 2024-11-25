// src/components/LoginPage.jsx

import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.scss';

function LoginPage() {
  const [formData, setFormData] = useState({
    emailCpf: '',
    senha: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailCpf) {
      newErrors.emailCpf = 'Preencha o campo Email ou CPF';
    }

    if (!formData.senha) {
      newErrors.senha = 'Preencha o campo Senha';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.emailCpf.includes('@') ? formData.emailCpf : undefined,
          cpf: !formData.emailCpf.includes('@') ? formData.emailCpf : undefined,
          senha: formData.senha,
        }),
      });

      if (response.ok) {
        alert('Login bem-sucedido!');
        navigate('/home'); // Navega para a página de home após login bem-sucedido
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      alert('Erro ao autenticar usuário, tente novamente.');
    }
  };

  return (
    <Container className="login-page">
      {/* Título centralizado */}
      <h2 className="welcome-title">Seja bem-vindo</h2>
      
      {/* Card de Login */}
      <Card className="login-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Campo de Email ou CPF */}
            <Form.Group controlId="formEmailCpf" className="mb-3">
              <Form.Label>Email ou CPF</Form.Label>
              <Form.Control
                type="text"
                name="emailCpf"
                value={formData.emailCpf}
                onChange={handleInputChange}
                placeholder="Digite seu email ou CPF"
                isInvalid={!!errors.emailCpf}
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailCpf}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Campo de Senha */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder="Digite sua senha"
                isInvalid={!!errors.senha}
              />
              <Form.Control.Feedback type="invalid">
                {errors.senha}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Botão de Login */}
            <Button variant="success" type="submit" className="w-100 mb-3">
              Login
            </Button>

            {/* Link para "Esqueceu sua senha?" */}
            <div className="text-left">
              <a href="/recuperar-senha" className="forgot-password-link">Esqueceu sua senha?</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
