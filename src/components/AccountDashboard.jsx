import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/styles/AccountDashboard.scss';
import AccountSidebar from './AccountSidebar';

function AccountDashboard({ children }) {
  return (
    <Container fluid className="account-dashboard">
      <Row className="no-gutters">
        <Col md={2} className="account-sidebar-container"> {/* Diminuindo a largura da sidebar */}
          <AccountSidebar />
        </Col>
        <Col md={10} className="account-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default AccountDashboard;