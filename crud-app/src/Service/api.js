import axios from 'axios';

const usersUrl = 'http://localhost:8000/users';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const getoneUser = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/id/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}
