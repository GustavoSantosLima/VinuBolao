import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU3MzU4ODc5Mn0.jsV-zhx_MGOmU6SiqnuDb3CVii30nl37NGG_zelySGg',
  },
});

export default api;
