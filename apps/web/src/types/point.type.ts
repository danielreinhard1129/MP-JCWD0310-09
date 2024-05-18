import { User } from "./user.type";

export interface Point {
    id: number;
    totalPoint: bigint;
    earnDate?: Date;
    expiredDate?: Date;
    userId: number;
    user?: User;
}
