import { EventController } from '@/controllers/event.controller';
import { SampleController } from '@/controllers/sample.controller';
import { uploader } from '@/lib/uploader';
import { Router } from 'express';

export class EventRouter {
    private router: Router;
    private eventController: EventController;

    constructor() {
        this.eventController = new EventController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/', uploader("IMG", "/images").array("thumbnail", 1), this.eventController.createEventController);

    }

    getRouter(): Router {
        return this.router;
    }
}