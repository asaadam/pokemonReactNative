import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

instance.defaults.headers.common['Content-type'] = 'application/json';

export default instance;
