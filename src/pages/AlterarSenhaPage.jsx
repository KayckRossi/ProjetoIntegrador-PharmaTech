// src/components/AlterarSenhaPage.jsx
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../assets/styles/AlterarSenhaPage.scss';
import AccountDashboard from '../components/AccountDashboard';

function AlterarSenhaPage() {
  const [formData, setFormData] = useState({
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.senhaAtual) newErrors.senhaAtual = 'Preencha o campo Senha Atual';
    if (!formData.novaSenha) newErrors.novaSenha = 'Preencha o campo Nova Senha';
    if (formData.novaSenha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aqui vai a lógica para enviar a solicitação de alteração de senha
      alert('Senha alterada com sucesso!');
    }
  };

  return (
    <AccountDashboard>
      <Container className="alterar-senha-page mt-4">
        <Row className="gx-4">
          <Col lg={8}>
            <h2 className="alterar-senha-title d-flex align-items-center">
              Crie sua nova senha
            </h2>
            <p className="alterar-senha-subtitle">
              Proteja sua conta com uma senha segura
            </p>
            <Card className="alterar-senha-card">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {/* Campo Senha Atual */}
                  <Form.Group controlId="formSenhaAtual" className="mb-3">
                    <Form.Label>Senha Atual</Form.Label>
                    <Form.Control
                      type="password"
                      name="senhaAtual"
                      value={formData.senhaAtual}
                      onChange={handleInputChange}
                      placeholder="Insira sua senha atual"
                      isInvalid={!!errors.senhaAtual}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.senhaAtual}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Nova Senha */}
                  <Form.Group controlId="formNovaSenha" className="mb-3">
                    <Form.Label>Nova Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="novaSenha"
                      value={formData.novaSenha}
                      onChange={handleInputChange}
                      placeholder="Insira uma nova senha"
                      isInvalid={!!errors.novaSenha}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.novaSenha}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Campo Confirmar Nova Senha */}
                  <Form.Group controlId="formConfirmarSenha" className="mb-3">
                    <Form.Label>Confirmar Nova Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmarSenha"
                      value={formData.confirmarSenha}
                      onChange={handleInputChange}
                      placeholder="Insira a senha novamente"
                      isInvalid={!!errors.confirmarSenha}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmarSenha}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Botão para Alterar Senha */}
                  <Button variant="primary" type="submit" className="w-100 alterar-senha-btn">
                    Criar nova senha
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Coluna com Dicas para uma senha segura */}
          <Col lg={4}>
            <Card className="dicas-senha-card mt-5">
              <Card.Body>
                <h4 className="dicas-senha-title">Dicas para uma senha mais segura</h4>
                <ul className="dicas-senha-list">
                  <li>Escolha uma senha longa, com pelo menos 12 caracteres, misturando letras, números e símbolos.</li>
                  <li>Evite usar informações pessoais, como seu nome ou data de nascimento, na senha.</li>
                  <li>Use uma senha única que você não está usando em outros sites ou serviços.</li>
                  <li>Evite padrões óbvios, como "1234", "abcd" ou teclas em sequência.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </AccountDashboard>
  );
}

export default AlterarSenhaPage;
