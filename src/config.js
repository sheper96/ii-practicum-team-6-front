import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const codeCrewAPI = {
  register(data) {
    return instance.post('/auth/register', data);
  },
  authMe() {
    return instance.get('/auth/me');
  },
  login(data) {
    return instance.post('/auth/login', data);
  },
  logOut() {
    return instance.post('/auth/logout');
  },
  forgotPassword(data) {
    return instance.post('/auth/forgot-password', data);
  },
  resetPassword(data) {
    return instance.post('/auth/reset-password', data);
  },
  getProject(id) {
    return instance.get(`/projects/${id}`);
  },
};

export default codeCrewAPI;