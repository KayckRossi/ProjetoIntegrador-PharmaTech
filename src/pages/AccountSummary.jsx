// src/components/AccountSummary.jsx

import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaHome, FaIdCard, FaPhone } from 'react-icons/fa';
import '../assets/styles/AccountSummary.scss';
import AccountDashboard from '../components/AccountDashboard';
import { useAuth } from '../context/AuthContext'; // Importar AuthContext

function AccountSummary() {
  const { user, login } = useAuth(); // Obter dados do usuário e função para atualizar no contexto
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(user || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const data = await response.json();
        login(data); // Atualiza os dados no contexto de autenticação
        console.log('Dados atualizados:', data);
        setIsEditing(false);
        alert('Informações atualizadas com sucesso!');
      } else {
        console.error('Erro ao atualizar as informações:', response.status);
        alert('Erro ao atualizar as informações. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao atualizar as informações:', error);
      alert('Erro ao atualizar as informações. Por favor, tente novamente.');
    }
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
                      name="nome"
                      value={updatedData.nome || ''}
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
