import axios from 'axios';
import BASE_URL from './api';
import type { Defi } from '../types/types';

export const getAllDefis = async (): Promise<Defi[]> => {
  const response = await axios.get(`${BASE_URL}/defis/all`);
  return response.data;
};

export const getUserDefis = async (userId: number): Promise<Defi[]> => {
  const response = await axios.get(`${BASE_URL}/defis/user/${userId}`);
  return response.data;
};

export const getAvailableDefis = async (userId: number): Promise<Defi[]> => {
  const response = await axios.get(`${BASE_URL}/defis/available/${userId}`);
  return response.data;
};

export const createDefi = async (
  title: string,
  goal: number,
  startDate: string,
  endDate: string
): Promise<Defi> => {
  const response = await axios.post(`${BASE_URL}/defis/create`, null, {
    params: { title, goal, startDate, endDate },
  });
  return response.data;
};

export const joinDefi = async (defiId: number, userId: number): Promise<boolean> => {
  const response = await axios.post(`${BASE_URL}/defis/join/${defiId}`, null, {
    params: { userId },
  });
  return response.data;
};
