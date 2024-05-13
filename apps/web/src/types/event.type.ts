import { User } from "./user.type"

export interface Event {
    id: number
    title: string
    startDate: string
    endDate: string
    location: string
    booked: number
    isFree: boolean
    thumbnail: string
    category: string
    content: string
    description: string
    price: string

    userId?: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null

    user: User

}

export interface IFormCreateEvent {

    title: string
    category: string
    content: string
    description: string
    thumbnail: File[]
    userId?: number
    location: string
    startDate: string
    endDate: string
    price: string
}