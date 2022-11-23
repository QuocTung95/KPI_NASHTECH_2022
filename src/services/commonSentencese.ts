import axiosClient from './http-common';
import {
  communicationEndPoint
} from '../contants/endPoint';

export default {
  getAll: (payload ={}) => {
    return axiosClient.get(communicationEndPoint.GET_ALL, payload);
  }
}

