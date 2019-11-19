import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

function Match() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      const { data } = await api.get('/matches/championship/22/2');
      setMatches(data);
    }

    getMatches();
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        <div className="box">
          <h1 className="title">Jogos</h1>
          <p>
            Lista de jogos do bolão Brasileirão 2018 filtrados por rodada,
            preencha os resultados.
          </p>
        </div>

        <div className="box">
          {matches.map((match, key) => (
            <div key={key}>
              {match.home.name} x {match.visitor.name}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Match;
