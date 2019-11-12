import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

function Home() {
  const [bolaos, setBolao] = useState([]);

  useEffect(() => {
    async function getBolao() {
      const { data } = await api.get('/bolaos');
      setBolao(data);
    }

    getBolao();
  }, []);

  return (
    <>
      <Header />

      <main id="home" className="container">
        <div className="box">
          <h1 className="title">Lista</h1>
          <p>Veja a lista de bolões que você participa!</p>
        </div>

        {bolaos.map(bolao => (
          <div key={bolao.id} className="box">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th colSpan="2">
                    <strong>{bolao.nome}</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Nome</th>
                  <td>{bolao.nome}</td>
                </tr>
                <tr>
                  <th scope="row">Administrador</th>
                  <td>{bolao.user.name}</td>
                </tr>
                <tr>
                  <th scope="row">Campeonato</th>
                  <td>
                    {bolao.campeonato.nome} - {bolao.campeonato.temporada} -
                    Série {bolao.campeonato.serie}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Data Inicial</th>
                  <td>{bolao.inicio}</td>
                </tr>
                <tr>
                  <th scope="row">Descrição</th>
                  <td dangerouslySetInnerHTML={{ __html: bolao.descricao }} />
                </tr>
                <tr>
                  <th scope="row">Ativo</th>
                  <td>{bolao.ativo ? 'SIM' : 'NÃO'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </main>
    </>
  );
}

export default Home;
