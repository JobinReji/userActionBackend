// src/services/userService.js
const API_URL = "http://localhost:5001/api/users";
const API_KEY = "JobinsZaucUr=|}5@&_)=@bw5FVP}^9=%CQcQ"; // Use the same key as in the backend .env

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

export const getUsers = async () => {
  const response = await fetch(API_URL, { headers });
  return response.json();
};

export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers,
  });
};
