import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function getUsers() {
  try {
    const response = await axios.get(`${URL}/users`);
    return response;
  } catch (e) {
    return e;
  }
}

export async function getUser(id) {
  try {
    const res = await axios.get(`${URL}/users/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}

export async function removeUser(id) {
  try {
    const response = await axios.delete(`${URL}/user/'${id}`);
    return response;
  } catch (e) {
    return e;
  }
}

export async function updateUser(id, formData) {
  try {
    const response = await axios.patch(`${URL}/users/${id}`, formData);
    return response;
  } catch (e) {
    return e;
  }
}

export async function register(data) {
  const response = await axios.post(`${URL}/register`, data);
  return response;
}
