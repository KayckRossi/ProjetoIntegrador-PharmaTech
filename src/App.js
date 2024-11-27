import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AccountSummary from './pages/AccountSummary';
import CadastroPage from './pages/CadastroPage';
import { default as HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MeusPedidos from './pages/MeusPedidosPage';
import SearchResults from './components/SearchResults';
import CategoriaProdutos from './components/CategoriaProdutos';
import CheckoutPage from './pages/CheckoutPage';
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
