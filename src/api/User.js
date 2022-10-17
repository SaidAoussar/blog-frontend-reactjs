import axios from "axios";

const URL = process.env.REACT_APP_URL;

export async function getUsers() {
  try {
    const response = await axios.get(`${URL}/user`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(id) {
  try {
    const res = await axios.get(`${URL}/user/${id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function removeUser(id) {
  try {
    const response = await axios.delete(`${URL}/user/'${id}`);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateUser(id, formData) {
  try {
    const response = await axios.put(`${URL}/user/${id}`, formData);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function register(data) {
  const response = await axios.post(`${URL}/register`, data);
  return response;
}
