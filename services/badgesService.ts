import axios from 'axios';
import BASE_URL from './api';
import type { Badge } from '../types/types';

export const getAllBadges = async (): Promise<Badge[]> => {
  const response = await axios.get(`${BASE_URL}/badges/all`);
  return response.data;
};

export const getEligibleBadges = async (userId: number): Promise<Badge[]> => {
  const response = await axios.get(`${BASE_URL}/badges/eligible/${userId}`);
  return response.data;
};
