import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CadastroPage from './pages/CadastroPage';
import { default as HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
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
      </Routes>

        <Footer />
    </Router>
  );
}

export default App;
