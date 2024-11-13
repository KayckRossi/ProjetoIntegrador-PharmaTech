// src/components/AccountSummary.jsx

import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaHome, FaIdCard, FaPhone } from 'react-icons/fa';
import '../assets/styles/AccountSummary.scss';
import AccountDashboard from '../components/AccountDashboard';

function AccountSummary({ userData = {} }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Aqui você pode fazer a integração com o backend para salvar as atualizações
    console.log('Dados atualizados:', updatedData);
    setIsEditing(false);
  };

  return (
    <AccountDashboard>
      <Container className="account-summary-page">
        <h2 className="account-summary-title">
          <FaHome className="title-icon" /> Resumo da Conta
        </h2>

        <Card className="account-summary-card">
          <Card.Body>
            <Form>
              <Row>
                {/* Nome Completo */}
                <Col md={6}>
                  <Form.Group controlId="formNomeCompleto" className="mb-3">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomeCompleto"
                      value={updatedData.nomeCompleto || ''}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>

                {/* E-mail */}
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <div className="input-icon">
                      <FaEnvelope className="input-icon-prefix" />
                      <Form.Control
                        type="email"
                        name="email"
                        value={updatedData.email || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
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
                      <Form.Control
                        type="text"
                        name="cpf"
                        value={updatedData.cpf || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </Form.Group>
                </Col>

                {/* Telefone */}
                <Col md={6}>
                  <Form.Group controlId="formTelefone" className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <div className="input-icon">
                      <FaPhone className="input-icon-prefix" />
                      <Form.Control
                        type="text"
                        name="telefone"
                        value={updatedData.telefone || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                {/* Endereço */}
                <Col md={12}>
                  <Form.Group controlId="formEndereco" className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      type="text"
                      name="endereco"
                      value={updatedData.endereco || ''}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {isEditing && (
                <div className="mt-3 text-center">
                  <Button variant="success" onClick={handleSave} className="me-2">
                    Salvar Alterações
                  </Button>
                  <Button variant="secondary" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </div>
              )}
            </Form>

            {!isEditing && (
              <div className="mt-3 text-center">
                <Button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                  Editar Informações
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </AccountDashboard>
  );
}

export default AccountSummary;
