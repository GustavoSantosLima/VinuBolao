import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

function Jogo() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    async function getBolao() {
      const { data } = await api.get('/jogos');
      setJogos([data[0], data[1], data[2], data[3], data[4]]);
    }

    getBolao();
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
          {jogos.map((jogo, key) => (
            <div key={key}>
              {jogo.mandante.nome} x {jogo.visitante.nome}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Jogo;
