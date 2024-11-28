import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoriaProdutos from './components/CategoriaProdutos';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AccountSummary from './pages/AccountSummary';
import AlterarSenhaPage from './pages/AlterarSenhaPage';
import CadastroPage from './pages/CadastroPage';
import CheckoutPage from './pages/CheckoutPage';
import { default as HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MeusPedidos from './pages/MeusPedidosPage';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
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
            <Route path="/alterar-senha" element={<AlterarSenhaPage />} />
            <Route path="/buscar/:term" element={<SearchResults />}></Route>
            <Route path="/categoria/:categoria" element={<CategoriaProdutos />} />
            <Route path="/checkout/cart" element={<CheckoutPage />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
