import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbackbeltrani.herokuapp.com',
});

export default api;
