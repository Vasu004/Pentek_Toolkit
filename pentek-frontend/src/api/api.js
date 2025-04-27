import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const runRecon = (domain) => {
  return axios.post(`${BASE_URL}/recon`, { domain });
};
