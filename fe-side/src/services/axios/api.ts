import axios from "axios";
import {
  StatElement
} from '../../types'; 

export const getStats = (): Promise<StatElement[]> => axios.get(`/stats`);

export const getTopRanked = (): Promise<StatElement[]> => axios.get(`/top_ranked`);
