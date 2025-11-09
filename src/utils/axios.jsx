import axios from "axios";

const instance = axios.create({
    baseURL: "https://vernanbackend.ezlab.in"
});

export default instance;