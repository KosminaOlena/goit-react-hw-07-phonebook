import axios from "axios";

axios.defaults.baseURL = 'https://650be64247af3fd22f66a952.mockapi.io/api';

export const fetchGetContact = async () => {
    const {data} = await axios.get('/contacts');
    return data;
}

export const fetchPostContact = async (contacts) => {
    const {data} = await axios.post('/contacts', contacts);
    return data;
}

export const fetchDeleteContact = async (id) => {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;
}