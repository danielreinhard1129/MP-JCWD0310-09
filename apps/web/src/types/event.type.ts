import { User } from "./user.type"



export interface Event {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    remainingTicket: number;
    booked: number;
    isFree: boolean;
    startDate: Date;
    endDate: Date;
    thumbnail: string;
    category: string
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User[]
}


export interface IFormCreateEvent {
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    thumbnail: File[]
    description: string;
    price: string;
    remainingTicket: string;
    userId?: number;
    category: string;
}