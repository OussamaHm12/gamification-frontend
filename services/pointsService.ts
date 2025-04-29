// services/pointsService.ts
import axios from 'axios';
import BASE_URL from './api';

export const getTotalPoints = async (userId: number): Promise<number> => {
  const response = await axios.get(`${BASE_URL}/points/total/${userId}`);
  return response.data;
};
