import axios from 'axios';
import { Data } from './entities';
import {ApiSearch} from './constants';
export const fetchSearch = async (input: string): Promise<Data> => {
  return axios.get(`${ApiSearch}${input}`);
};
