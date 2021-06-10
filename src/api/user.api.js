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

export const getPostByUserAPI = async userId => {
  const data = await axios.get(`${BASE_URL}/posts`, {
    params: {
      userId,
    },
  });
  return data.data;
};

export const addPostAPI = async post => {
  const data = await axios.post(`${BASE_URL}/posts`, post);
  return data.data;
};

export const updatePostAPI = async (postId, post) => {
  const data = await axios.put(`${BASE_URL}/posts/${postId}`, post);
  return data.data;
};

export const deletePostPI = async postId => {
  const data = await axios.delete(`${BASE_URL}/posts/${postId}`);
  return data.data;
};
