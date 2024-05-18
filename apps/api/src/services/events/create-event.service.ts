import prisma from "@/prisma"
import { Event, User, UserDetail } from "@prisma/client"


// Interface CreateEvent sesuai dengan model Event di Prisma
interface CreateEvent extends Omit<Event, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'thumbnail' | 'isfree' | 'user'> { }


export const createEventService = async (body: CreateEvent, file: Express.Multer.File) => {
    try {
        const { title, userId, startDate, endDate, remainingTicket, description, location, price, booked, isFree, category } = body;

        // Cek jika title sudah digunakan
        const existingTitle = await prisma.event.findFirst({
            where: { title }
        });

        if (existingTitle) {
            throw new Error(`Title already in use`);
        }


        console.log(`userId: ${userId}`);



        const user = await prisma.user.findFirst({ where: { id: Number(userId) } });
        if (!user) {
            throw new Error(`User not found`);
        }

        // const eventCategory = await prisma.eventCategory.findFirst({
        //     where: {
        //         categoryName: String()
        //     }
        // })
        // if (!eventCategory) {
        //     throw new Error(`Event category not found`);
        // }

        return await prisma.event.create({
            data: {

                title: title,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                thumbnail: `/images/${file.filename}`,
                remainingTicket: Number(remainingTicket),

                description: String(description),
                location: String(location),
                price: Number(price), userId: Number(userId)
                // , EventCategory: {
                //     create: {
                //         categoryName: eventCategory.categoryName
                //     }
                // }
                , booked: Number(booked), isFree: Boolean(isFree), category: String(category)

            }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
