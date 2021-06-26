import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsersAPI = async () => {
  const data = await axios.get(`${BASE_URL}/users`);
  return data.data;
};

export const getUserAPI = async id => {
  const data = await axios.get(`${BASE_URL}/users/${id}`);
  return data.data;
};

export const getAlbumsByUserAPI = async userId => {
  const data = await axios.get(`${BASE_URL}/albums`, {
    params: {
      userId,
    },
  });
  return data.data;
};

export const getPhotosByAlbumAPI = async albumId => {
  const data = await axios.get(`${BASE_URL}/photos`, {
    params: {
      albumId,
    },
  });
  return data.data;
};
