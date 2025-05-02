import axios from 'axios';
import BASE_URL from './api';
import type { Contact } from '../types/types';

export const getContacts = async (userId: number): Promise<Contact[]> => {
  const response = await axios.get(`${BASE_URL}/contacts/user/${userId}`);
  return response.data;
};

export const addFriend = async (userId: number, friendId: number): Promise<Contact> => {
  const response = await axios.post(`${BASE_URL}/contacts/add`, null, {
    params: { userId, friendId },
  });
  return response.data;
};
