import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

import './Ranking.css';

function Ranking() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    async function getRanking() {
      const { data } = await api.get('/ranking/22/1');
      setRanking(data);
    }

    getRanking();
  }, []);

  return (
    <>
      <Header />

      <main id="ranking" className="container">
        <div className="box">
          <h1 className="title">Classificação</h1>
          <p>
            Veja sua posição em relação aos outros participantes no bolão
            Brasileirão 2018!
          </p>
        </div>

        <div className="box">
          <table className="table">
            <thead>
              <tr className="thead">
                <th>#</th>
                <th className="table-name">Nome</th>
                <th>PG</th>
                <th>PE</th>
                <th>PV</th>
                <th>DP</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}º</td>
                  <td className="table-name">
                    <strong>{item.name}</strong>
                  </td>
                  <td>
                    <strong>{item.points}</strong>
                  </td>
                  <td>{item.exactscores}</td>
                  <td>{item.winningscores}</td>
                  <td>{item.points - ranking[0].points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="box">
          <h4 className="title-box">Legenda</h4>
          <p>
            <strong> PG</strong> - Pontos Ganhos,
            <strong> PE</strong> - Placar Exato,
            <strong> PV</strong> - Placar Vencedor,
            <strong> DP</strong> - Diferença de pontos em relação ao primeiro
            colocado.
          </p>
          <div className="box-legend">
            <div className="legend exato" /> - Campeões.
            <div className="legend vencedor" /> - Lanternas.
          </div>
        </div>
      </main>
    </>
  );
}
export default Ranking;
