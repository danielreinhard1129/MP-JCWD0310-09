import { Gender } from "./enum.type";
import { Point } from "./point.type";
import { Reward } from "./reward.type";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
    referralCode?: string
    userDetail?: UserDetail;
    point?: Point;
    reward?: Reward;
    event?: Event;
}

export interface UserDetail {
    id: number;
    birthDate?: Date;
    gender?: Gender;
    phone?: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user?: User;
}
