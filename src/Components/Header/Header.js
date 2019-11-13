import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../services/auth';

import './Header.css';

function Header({ history }) {
  function handleSignOut() {
    logout();
    history.push('/');
  }

  return (
    <header className="header">
      <ul className="menu">
        <li className="menu-item">
          <Link className="menu-link" to="/bolao">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/classificacao">
            Classificação
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/jogos">
            Jogo
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/palpites">
            Palpite
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/regulamento">
            Regulamento
          </Link>
        </li>
        <li className="menu-item exit">
          <div className="menu-link" onClick={() => handleSignOut()}>
            Sair
          </div>
        </li>
      </ul>
    </header>
  );
}

export default withRouter(Header);
