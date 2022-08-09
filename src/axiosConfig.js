import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001'

axios.interceptors.request.use((axiosReqConfig) => {
    const token = localStorage.getItem('token');

    if (token) {
        axiosReqConfig.headers.common.token = `${token}`;
    }

    return axiosReqConfig;
});

export default axios