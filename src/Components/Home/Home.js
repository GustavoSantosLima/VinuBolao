import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import Header from '../Header/Header';
import api from '../../services/api';

function Home() {
  const [pools, setPool] = useState([]);

  useEffect(() => {
    async function getPool() {
      const { data: pagination } = await api.get('/pools');
      setPool(pagination.data);
    }

    getPool();
  }, []);

  return (
    <>
      <Header />

      <main id="home" className="container">
        <div className="box">
          <h1 className="title">Lista</h1>
          <p>Veja a lista de bolões que você participa!</p>
        </div>

        {pools.map(pool => (
          <div key={pool.id} className="box">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th colSpan="2">
                    <strong>{pool.name}</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Nome</th>
                  <td>{pool.name}</td>
                </tr>
                <tr>
                  <th scope="row">Administrador</th>
                  <td>{pool.user.name}</td>
                </tr>
                <tr>
                  <th scope="row">Campeonato</th>
                  <td>
                    {pool.championship.name} - {pool.championship.season} -
                    Série {pool.championship.serie}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Data Inicial</th>
                  <td>{format(parseISO(pool.starts), 'dd/MM/yyyy')}</td>
                </tr>
                <tr>
                  <th scope="row">Descrição</th>
                  <td dangerouslySetInnerHTML={{ __html: pool.description }} />
                </tr>
                <tr>
                  <th scope="row">Ativo</th>
                  <td>{pool.ativo ? 'SIM' : 'NÃO'}</td>
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
