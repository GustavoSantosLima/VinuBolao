import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <ul className="menu">
        <li className="menu-item">
          <Link className="menu-link" to="/">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/classificacao">
            Classificação
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/jogo">
            Jogo
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/palpite">
            Palpite
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link" to="/regulamento">
            Regulamento
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
