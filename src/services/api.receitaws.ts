import axios from 'axios';

const apiReceita = axios.create({
  baseURL: 'https://www.receitaws.com.br/v1/cnpj/08017272000106'
});

export default apiReceita;