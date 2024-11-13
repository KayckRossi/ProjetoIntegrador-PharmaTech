import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaKey, FaRegListAlt, FaSignOutAlt } from 'react-icons/fa';
import '../assets/styles/AccountSidebar.scss';

function AccountSidebar() {
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
      <Nav.Link href="/sair" className="nav-item">
        <FaSignOutAlt className="nav-icon" />
        <span>Sair</span>
      </Nav.Link>
    </Nav>
  );
}

export default AccountSidebar;