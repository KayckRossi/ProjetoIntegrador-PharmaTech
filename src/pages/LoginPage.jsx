// src/components/LoginPage.jsx

import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import '../assets/styles/';

function LoginPage() {
  return (
    <Container className="login-page">
      {/* Título centralizado */}
      <h2 className="welcome-title">Seja bem-vindo</h2>
      
      {/* Card de Login */}
      <Card className="login-card">
        <Card.Body>
          <Form>
            {/* Campo de Email ou CPF */}
            <Form.Group controlId="formEmailCpf" className="mb-3">
              <Form.Label>Email ou CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu email ou CPF" />
            </Form.Group>

            {/* Campo de Senha */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
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
