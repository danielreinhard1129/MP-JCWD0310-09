import { Event } from "./event.type";

export interface EventCategory {
    id: number;
    categoryName: string;
    event?: Event;
}

