import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU3MzUxNDMzNn0.NS_WmLFM5w00afdTiJaraijYtDm644n_YTwc5bMMrH4',
  },
});

export default api;
