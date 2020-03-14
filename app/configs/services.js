import {post, put, get, remove} from './networking';

// end point
export const services = {
  login: async params => post('api/users/v1', params),
  register: async params => post('api/users/v1/register', params),
  getSoalById: async (header, params) =>
    get('api/anzalla/soal/v1', params, header),
  getListQuiz: async params => get('api/anzalla/soal/v1', {}, params),
  postQuiz: async (header, params) =>
    post('api/anzalla/soal/v1', params, header),
  getProfile: async params => get('api/users/v1', {}, params),
};

export default services;
