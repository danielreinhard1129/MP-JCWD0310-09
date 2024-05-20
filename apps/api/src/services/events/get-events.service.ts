import prisma from "@/prisma"
import { PaginationQueryParams } from "@/types/pagination.types.ts";

import { Prisma } from "@prisma/client"

interface GetEvensQuery extends PaginationQueryParams {
    search: string;
}

export const getEventsService = async (query: GetEvensQuery) => {

    const whereClause: Prisma.EventWhereInput = {} = {
    }
    try {
        const { page, sortBy, sortOrder, take, search } = query

        const whereCaluse: Prisma.EventWhereInput = {
            title: { contains: search }
        }

        const events = await prisma.event.findMany({
            where: whereClause,
            skip: (page - 1) * take,
            take: take,
            orderBy: {
                [sortBy]: sortOrder
            },
            include: { user: true }
        })

        const count = await prisma.event.count({ where: whereCaluse })
        return {
            data: events,
            meta: { page, take, total: count },
        };

    } catch (error) {

    }
}