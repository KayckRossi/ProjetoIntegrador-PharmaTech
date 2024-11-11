// src/components/CadastroPage.jsx

import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaIdCard, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import '../assets/styles/CadastroPage.scss';

function CadastroPage() {
  return (
    <Container className="cadastro-page">
      {/* Título centralizado */}
      <h2 className="cadastro-title">
        <FaUser className="title-icon" /> Nova Conta 
      </h2>

      {/* Card de Cadastro */}
      <Card className="cadastro-card">
        <Card.Body>
          <Form>
            <Row>
              {/* Nome Completo */}
              <Col md={6}>
                <Form.Group controlId="formNomeCompleto" className="mb-3">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" placeholder="Ex.: Josefa Santos" />
                </Form.Group>
              </Col>

              {/* E-mail */}
              <Col md={6}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <div className="input-icon">
                    <FaEnvelope className="input-icon-prefix" />
                    <Form.Control type="email" placeholder="exemplo@exemplo.com.br" />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* CPF */}
              <Col md={6}>
                <Form.Group controlId="formCpf" className="mb-3">
                  <Form.Label>CPF</Form.Label>
                  <div className="input-icon">
                    <FaIdCard className="input-icon-prefix" />
                    <Form.Control type="text" placeholder="000.000.000-00" />
                  </div>
                </Form.Group>
              </Col>

              {/* Telefone */}
              <Col md={6}>
                <Form.Group controlId="formTelefone" className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <div className="input-icon">
                    <FaPhone className="input-icon-prefix" />
                    <Form.Control type="text" placeholder="(00) 00000-0000" />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Data de Nascimento */}
              <Col md={6}>
                <Form.Group controlId="formDataNascimento" className="mb-3">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control type="text" placeholder="dd/mm/aaaa" />
                </Form.Group>
              </Col>

              {/* Gênero */}
              <Col md={6}>
                <Form.Group controlId="formGenero" className="mb-3">
                  <Form.Label>Gênero</Form.Label>
                  <div className="gender-options">
                    <Form.Check inline type="radio" name="genero" label="Masculino" />
                    <Form.Check inline type="radio" name="genero" label="Feminino" />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Senha */}
              <Col md={6}>
                <Form.Group controlId="formSenha" className="mb-3">
                  <Form.Label>Senha</Form.Label>
                  <div className="input-icon">
                    <FaLock className="input-icon-prefix" />
                    <Form.Control type="password" placeholder="Digite uma senha" />
                  </div>
                </Form.Group>
              </Col>

              {/* Confirmar Senha */}
              <Col md={6}>
                <Form.Group controlId="formConfirmarSenha" className="mb-3">
                  <Form.Label>Confirmar Senha</Form.Label>
                  <div className="input-icon">
                    <FaLock className="input-icon-prefix" />
                    <Form.Control type="password" placeholder="Repita a senha" />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Botão de Cadastro */}
            <Button variant="success" type="submit" className="w-100">
              Cadastrar
            </Button>
          </Form>

          {/* Link para "Já tenho cadastro" */}
          <div className="text-right mt-3">
            <a href="/login" className="already-have-account-link">
              Já tenho cadastro
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CadastroPage;
