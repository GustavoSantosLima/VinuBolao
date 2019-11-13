import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

function Palpite() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    async function getBolao() {
      const { data } = await api.get('/jogos/campeonato/22/1');
      setJogos(data);
    }

    getBolao();
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        <div className="box">
          <h1 className="title">Palpites</h1>
          <p>
            Lista de jogos do bolão Brasileirão 2018 para você preencher os seus
            palpites, lembre-se de preencher seu palpite antes do inicio de cada
            jogo.
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

export default Palpite;
