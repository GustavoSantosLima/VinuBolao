import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

function Guess() {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    async function getGuesses() {
      const { data } = await api.get('/matches/championship/22/2');
      setGuesses(data);
    }

    getGuesses();
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
          {guesses.map((guess, key) => (
            <div key={key}>
              {guess.home.name} x {guess.visitor.name}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Guess;
