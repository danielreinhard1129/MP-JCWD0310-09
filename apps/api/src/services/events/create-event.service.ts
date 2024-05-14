import prisma from "@/prisma"
import { Event } from "@prisma/client"

interface CreateEvent extends Omit<Event, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'thumbnail'> {

}

export const createEventService = async (body: CreateEvent, file: Express.Multer.File) => {
    try {
        const { title, userId } = body

        const existingTitle = await prisma.event.findFirst({
            where: { title }
        })

        if (existingTitle) {
            throw new Error(`Title already in use`)
        }

        const user = await prisma.user.findFirst({ where: { id: userId } })

        if (!user) {
            throw new Error(`user not found`)
        }

        return await prisma.event.create({
            data: {
                ...body,
                thumbnail: `/images/${file.filename}`,
                userId: Number(userId)
            }
        })
    } catch (error) {
        throw error
    }
}