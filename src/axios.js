import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://80.78.243.226/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
