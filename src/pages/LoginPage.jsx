// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../assets/styles/LoginPage.scss';
import { useAuth } from '../context/AuthContext';

const MySwal = withReactContent(Swal);

function LoginPage() {
  const [formData, setFormData] = useState({
    emailCpf: '',
    senha: '',
  });

  const { login } = useAuth(); // Hook para o login do AuthContext
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

    console.log('Dados do login:', formData); // Adicione este log para debug

    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.emailCpf.includes('@') ? formData.emailCpf : null,
                cpf: !formData.emailCpf.includes('@') ? formData.emailCpf : null,
                senha: formData.senha,
            }),
        });

        console.log('Resposta do backend:', response.status); // Adicione este log para verificar o status

        if (response.ok) {
            const data = await response.json();
            console.log('Dados do usuário:', data); // Adicione este log para verificar os dados recebidos

            // Verifique se todos os campos necessários estão preenchidos
            if (data && data.id && data.nome && data.email) {
                login(data); // Salva os dados do usuário no AuthContext
                Swal.fire({
                    icon: 'success',
                    title: 'Login bem-sucedido!',
                    confirmButtonColor: '#004085', // Cor padrão do projeto
                }).then(() => {
                    setTimeout(() => {
                        navigate('/'); // Redireciona para a página inicial após o delay
                    }, 1500);
                });
            } else {
                console.error('Dados incompletos do usuário:', data);
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao obter os dados do usuário',
                    text: 'Os dados recebidos estão incompletos. Por favor, tente novamente.',
                    confirmButtonColor: '#004085',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Credenciais inválidas',
                text: 'Verifique o email/CPF e senha e tente novamente.',
                confirmButtonColor: '#004085', // Cor padrão do projeto
            });
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        Swal.fire({
            icon: 'error',
            title: 'Erro ao autenticar usuário',
            text: 'Tente novamente.',
            confirmButtonColor: '#004085', // Cor padrão do projeto
        });
    }
};

  const handleForgotPassword = () => {
    MySwal.fire({
      title: 'Recuperar Senha',
      html: `
        <div class="form-group mb-3">
          <label for="cpf">Digite seu CPF:</label>
          <input id="cpf" class="form-control" type="text">
        </div>
        <div class="form-group mb-3">
          <label for="newPassword">Digite sua nova senha:</label>
          <input id="newPassword" class="form-control" type="password">
        </div>`,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#388e3c', // Cor padrão do projeto
      preConfirm: () => {
        const cpf = Swal.getPopup().querySelector('#cpf').value;
        const newPassword = Swal.getPopup().querySelector('#newPassword').value;

        if (!cpf || !newPassword) {
          Swal.showValidationMessage('Todos os campos devem ser preenchidos');
        } else {
          // Lógica para enviar os dados e alterar a senha
          return fetch('http://localhost:8080/api/auth/reset-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cpf, newPassword }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Erro ao redefinir senha: ${error}`);
            });
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Senha redefinida com sucesso!',
          confirmButtonColor: '#004085', // Cor padrão do projeto
        });
      }
    });
  };

  return (
    <Container className="login-page">
      <h2 className="welcome-title">Seja bem-vindo</h2>
      <Card className="login-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
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

            <Button variant="success" type="submit" className="w-100 mb-3">
              Login
            </Button>

            <div className="text-left">
              <a href="#" className="forgot-password-link" onClick={handleForgotPassword}>
                Esqueceu sua senha?
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
