const BASE_URL = 'https://localhost:44386/api/usuarios';

export const getUsers = async (page) => {
  const response = await fetch(`${BASE_URL}/GetAll?PageNumber=${page}`);
  const data = await response.json();
  return data;
};

export const createUser = async (user) => {
  const response = await fetch(`${BASE_URL}/Create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};