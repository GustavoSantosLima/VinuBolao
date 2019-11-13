import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login, isAuthenticated } from '../../services/auth';
import api from '../../services/api';

import './Login.css';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push('/bolao');
    }
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar!' });
    } else {
      try {
        const response = await api.post('/authenticate', { email, password });

        login(response.data.token);

        this.props.history.push('/bolao');
      } catch (err) {
        this.setState({
          error: 'Houve um problema com o login, verifique suas credenciais.',
        });
      }
    }
  };

  render() {
    return (
      <div id="login">
        <form className="form-login" onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}

          <input
            type="email"
            className="input-login"
            placeholder="Digite seu e-mail..."
            onChange={e => this.setState({ email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Digite sua senha..."
            className="input-login"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <button className="btn-login" type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
