import axios from 'axios';

const api = axios.create({
    baseURL: "http://testetaking.herokuapp.com/"
});

export default api;