import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaKey, FaRegListAlt, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // Importar o contexto de autenticação
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação
import '../assets/styles/AccountSidebar.scss';

function AccountSidebar() {

  const { logout } = useAuth(); // Pegar a função de logout do contexto
  const navigate = useNavigate(); // Hook para redirecionar o usuário

  // Função para lidar com o logout
  const handleLogout = () => {
    logout(); // Executar a função de logout do contexto
    navigate('/login'); // Redirecionar o usuário para a página de login após sair
  };  

  return (
    <Nav defaultActiveKey="/resumo" className="flex-column account-sidebar">
      <Nav.Link href="/resumo" className="nav-item">
        <FaHome className="nav-icon" />
        <span>Resumo da conta</span>
      </Nav.Link>
      <Nav.Link href="/meus-pedidos" className="nav-item">
        <FaRegListAlt className="nav-icon" />
        <span>Meus pedidos</span>
      </Nav.Link>
      <Nav.Link href="/alterar-senha" className="nav-item">
        <FaKey className="nav-icon" />
        <span>Alterar senha</span>
      </Nav.Link>
      <Nav.Link as="button" onClick={handleLogout} href="/sair" className="nav-item logout-link">
        <FaSignOutAlt className="nav-icon" />
        <span>Sair</span>
      </Nav.Link>
    </Nav>
  );
}

export default AccountSidebar;