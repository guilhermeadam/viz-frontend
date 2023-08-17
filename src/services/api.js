import axios from 'axios';

export const api = axios.create({
  baseURL: '/pentaho/plugin/viz/api/',
});

export const pentaho = axios.create({
  baseURL: '/pentaho/',
});
