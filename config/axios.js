import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
});

export default clienteAxios;