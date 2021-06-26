import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersAPI = async () => {
  const data = await axios.get(`${BASE_URL}/character`);
  return data.data.results;
};

export const getCharacterDetailAPI = async id => {
  const data = await axios.get(`${BASE_URL}/character/${id}`);
  return data.data;
};
