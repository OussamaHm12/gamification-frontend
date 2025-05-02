// types/types.ts

export type Badge = {
    id: number;
    name: string;
    badgeType: 'VIREMENT' | 'FACTURE' | 'CARTE' | 'EPARGNE' | 'ANCIENNETE';
    description: string;
    pointsRequired: number;
  };
  
  export type StoreItem = {
    id: number;
    name: string;
    type: 'BADGE' | 'AVATAR';
    price: number;
    imageUrl: string;
  };
  
  export type Defi = {
    id: number;
    title: string;
    goal: number;
    startDate: string; // ISO format (yyyy-MM-ddTHH:mm:ss)
    endDate: string;
    participants: number[]; // user IDs
  };
  
  export type Contact = {
    id: number;
    userId: number;
    friendId: number;
  };
  