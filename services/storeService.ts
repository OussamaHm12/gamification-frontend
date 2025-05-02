import axios from 'axios';
import BASE_URL from './api';
import type { StoreItem } from '../types/types';

export const getStoreItems = async (): Promise<StoreItem[]> => {
  const response = await axios.get(`${BASE_URL}/store/items`);
  return response.data;
};

export const purchaseStoreItem = async (userId: number, itemId: number): Promise<StoreItem | null> => {
  const response = await axios.post(`${BASE_URL}/store/purchase`, null, {
    params: { userId, itemId },
  });
  return response.data || null;
};
