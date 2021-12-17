import axios from "axios";

const defaultModules = ['login'];
let axiosBaseUrl = 'http://localhost:3020/api';

if (window.location.hostname !== 'localhost') {
    axiosBaseUrl = 'http://3.145.192.104:3020/api/';
}

const axiosInstance = axios.create({
    baseURL: axiosBaseUrl
});

axiosInstance.interceptors.request.use(
    (config) => {
        // config.headers.authorization = util.getToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let response = {};
        if (typeof error.response !== 'undefined') {
            response = error.response?.data;
            if (!response?.message) {
                response.message = error.message
            }
        } else {
            response.message = error.message
        }
        return Promise.reject(response);
    }
);

export default axiosInstance;