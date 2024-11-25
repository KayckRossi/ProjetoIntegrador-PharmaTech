// src/components/SearchResults.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { term } = useParams();
  const [produtosEncontrados, setProdutosEncontrados] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/produtos/buscar?nome=${term}`);
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        const produtos = await response.json();
        setProdutosEncontrados(produtos);
      } catch (error) {
        console.error("Erro na busca:", error);
      }
    };
    fetchResults();
  }, [term]);

  return (
    <div>
      <h4>Resultados da busca para: {term}</h4>
      {produtosEncontrados.map((produto) => (
        <div key={produto.id} className="produto-item">
          <h5>{produto.nome}</h5>
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
