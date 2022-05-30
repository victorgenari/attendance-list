import axios from "axios";

const api = axios.create({
    baseURL: "api.github.com/users/victorgenari"
});

export default api;