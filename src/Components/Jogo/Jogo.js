import React from 'react';
import Header from '../Header/Header';

const Jogo = () => (
  <>
    <Header />

    <main className="content">
      <div className="box">
        <h1 className="title">Jogos</h1>
        <p>
          Lista de jogos do bolão Brasileirão 2018 filtrados por rodada,
          preencha os resultados.
        </p>
      </div>
    </main>
  </>
);
export default Jogo;
