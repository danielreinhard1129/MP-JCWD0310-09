import { User } from "./user.type";

export interface Reward {
    id: number;
    title: string;
    nominal: number;
    userId: number;
    user: User;
}
