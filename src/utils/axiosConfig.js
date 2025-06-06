import axios from 'axios';
import { loadingController } from './loadingController';

const instance = axios.create({
    baseURL: process.env.REACT_APP_PREFIX_URL
});

instance.interceptors.request.use(
    (config) => {
        loadingController.start();
        return config;
    },
    (error) => {
        loadingController.stop();
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        loadingController.stop();
        return response;
    },
    (error) => {
        loadingController.stop();
        return Promise.reject(error);
    }
);

export default instance;
