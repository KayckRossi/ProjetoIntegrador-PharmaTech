import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AccountSummary from './pages/AccountSummary';
import CadastroPage from './pages/CadastroPage';
import { default as HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MeusPedidos from './pages/MeusPedidosPage';
import SearchResults from './components/SearchResults';
function App() {
  return (
    <Router>
      {/* Cabeçalho do aplicativo */}
      <Header />

      {/* Definindo as Rotas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/resumo" element={<AccountSummary />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        <Route path="/buscar" element={<SearchResults />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
