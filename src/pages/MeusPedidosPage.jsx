// src/pages/MeusPedidosPage.jsx

import React, { useEffect, useState } from 'react';
import { Container, Pagination, Table } from 'react-bootstrap';
import '../assets/styles/MeusPedidosPage.scss';
import AccountDashboard from '../components/AccountDashboard';

function MeusPedidosPage() {
  const [pedidos, setPedidos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pedidosPerPage = 5;

  useEffect(() => {
    // Simula uma requisição para obter os pedidos do usuário
    const fetchedPedidos = [
      { id: 1, status: 'Entregue', data: '2024-11-10', valor: 'R$ 150,00' },
      { id: 2, status: 'A caminho', data: '2024-11-09', valor: 'R$ 200,00' },
      { id: 3, status: 'Em processamento', data: '2024-11-08', valor: 'R$ 120,00' },
      { id: 4, status: 'Cancelado', data: '2024-11-07', valor: 'R$ 80,00' },
      { id: 5, status: 'Entregue', data: '2024-11-06', valor: 'R$ 300,00' },
      { id: 6, status: 'Entregue', data: '2024-11-05', valor: 'R$ 100,00' },
    ];
    setPedidos(fetchedPedidos);
  }, []);

  // Paginação
  const indexOfLastPedido = currentPage * pedidosPerPage;
  const indexOfFirstPedido = indexOfLastPedido - pedidosPerPage;
  const currentPedidos = pedidos.slice(indexOfFirstPedido, indexOfLastPedido);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AccountDashboard>
      <Container className="meus-pedidos">
        <h2 className="my-4">Meus Pedidos</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Status</th>
              <th>Data</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {currentPedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.status}</td>
                <td>{pedido.data}</td>
                <td>{pedido.valor}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="justify-content-center">
          {[...Array(Math.ceil(pedidos.length / pedidosPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </AccountDashboard>
  );
}

export default MeusPedidosPage;
