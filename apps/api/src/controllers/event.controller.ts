import { NextFunction, Request, Response } from 'express';
import prisma from '@/prisma';
import { createEventService } from '@/services/events/create-event.service';
import { getEventService } from '@/services/events/get-event.service';

export class EventController {
    async createEventController(req: Request, res: Response) {

        const files = req.files as Express.Multer.File[]

        if (!files.length) {
            throw new Error(`no file uploaded`)
        }
        const result = await createEventService(req.body, files[0])



        return res.status(200).send(result);
    }

    async getEventController(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const result = await getEventService(Number(id))

            return res.status(200).send(result)
        } catch (error) {
            next(error)
        }
    }


}
