import React, { Component } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bolaos: [],
    };
  }

  componentDidMount() {
    this.getBolao();
  }

  getBolao = async () => {
    const { data } = await api.get('/bolaos');
    this.setState({ bolaos: data });
  };

  render() {
    const { bolaos } = this.state;

    return (
      <>
        <Header />

        <main className="content">
          <div className="box">
            <h1 className="title">Lista</h1>
            <p>Veja a lista de bolões que você participa!</p>
          </div>

          <div className="box">
            {bolaos.map(bolao => (
              <div key={bolao.id} className="title">
                {bolao.nome}
              </div>
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default Home;
