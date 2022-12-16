import axios from 'axios';

const ApiClient = () => {
  const instance = axios.create();

  instance.interceptors.request.use(async (request) => {
    request.baseURL = process.env.API_BASE_URL;
    request.validateStatus = (status) => status >= 200 && status < 300;

    return request;
  });

  return instance;
};

export default ApiClient();
