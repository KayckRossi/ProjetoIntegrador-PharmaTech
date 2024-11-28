// src/components/CadastroPage.jsx

import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEnvelope, FaIdCard, FaLock, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/CadastroPage.scss';

function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    senha: '',
    confirmarSenha: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Preencha o campo Nome Completo';
    if (!formData.email) newErrors.email = 'Preencha o campo E-mail';
    if (!formData.cpf) newErrors.cpf = 'Preencha o campo CPF';
    if (!formData.telefone) newErrors.telefone = 'Preencha o campo Telefone';
    if (!formData.dataNascimento) newErrors.dataNascimento = 'Preencha o campo Data de Nascimento';
    if (!formData.endereco) newErrors.endereco = 'Preencha o campo Endereço';
    if (!formData.senha) newErrors.senha = 'Preencha o campo Senha';
    if (formData.senha !== formData.confirmarSenha) newErrors.confirmarSenha = 'As senhas não coincidem';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {

      console.log('Dados enviados para o backend:', {
        nome: formData.nome,
        email: formData.email,
        cpf: formData.cpf,
        telefone: formData.telefone,
        dataNascimento: formData.dataNascimento,
        endereco: formData.endereco,
        senha: formData.senha,
      });
      
      const response = await fetch('http://localhost:8080/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome, // Atualize aqui
          email: formData.email,
          cpf: formData.cpf,
          telefone: formData.telefone,
          dataNascimento: formData.dataNascimento,
          endereco: formData.endereco,
          senha: formData.senha,
        }),
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/login');
      } else {
        alert('Erro ao cadastrar usuário, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário, tente novamente.');
    }
  };

  return (
    <Container className="cadastro-page">
      {/* Título centralizado */}
      <h2 className="cadastro-title">
        <FaUser className="title-icon" /> Nova Conta 
      </h2>

      {/* Card de Cadastro */}
      <Card className="cadastro-card">
        <Card.Body>
          <Form onSubmit={handleSubmit} noValidate>
            <Row>
              {/* Nome Completo */}
              <Col md={6}>
                      <Form.Group controlId="formNome" className="mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ex.: Josefa Santos" 
            name="nome" 
            value={formData.nome} 
            onChange={handleInputChange} 
            isInvalid={!!errors.nome}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nome}
          </Form.Control.Feedback>
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
                      placeholder="exemplo@exemplo.com.br" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
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
                      placeholder="000.000.000-00" 
                      name="cpf" 
                      value={formData.cpf} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.cpf}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cpf}
                    </Form.Control.Feedback>
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
                      placeholder="(00) 00000-0000" 
                      name="telefone" 
                      value={formData.telefone} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.telefone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telefone}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Data de Nascimento */}
              <Col md={6}>
                <Form.Group controlId="formDataNascimento" className="mb-3">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="dd/mm/aaaa" 
                    name="dataNascimento" 
                    value={formData.dataNascimento} 
                    onChange={handleInputChange} 
                    isInvalid={!!errors.dataNascimento}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dataNascimento}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Endereço */}
              <Col md={6}>
                <Form.Group controlId="formEndereco" className="mb-3">
                  <Form.Label>Endereço</Form.Label>
                  <div className="input-icon">
                    <FaMapMarkerAlt className="input-icon-prefix" />
                    <Form.Control 
                      type="text" 
                      placeholder="Rua, número, bairro, cidade" 
                      name="endereco" 
                      value={formData.endereco} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.endereco}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.endereco}
                    </Form.Control.Feedback>
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
                    <Form.Control 
                      type="password" 
                      placeholder="Digite uma senha" 
                      name="senha" 
                      value={formData.senha} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.senha}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.senha}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Col>

              {/* Confirmar Senha */}
              <Col md={6}>
                <Form.Group controlId="formConfirmarSenha" className="mb-3">
                  <Form.Label>Confirmar Senha</Form.Label>
                  <div className="input-icon">
                    <FaLock className="input-icon-prefix" />
                    <Form.Control 
                      type="password" 
                      placeholder="Repita a senha" 
                      name="confirmarSenha" 
                      value={formData.confirmarSenha} 
                      onChange={handleInputChange} 
                      isInvalid={!!errors.confirmarSenha}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmarSenha}
                    </Form.Control.Feedback>
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
