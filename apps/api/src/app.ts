import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  static as static_
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { AuthRouter } from './routers/auth.router';
import { EventRouter } from './routers/event.router';
import { join } from 'path';
import { UserRouter } from './routers/user.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true })); //untuk membaca form data
    this.app.use('/api/assets', static_(join(__dirname, '../public')))
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const eventRouter = new EventRouter();
    const userRouter = new UserRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use('/api/auth/', authRouter.getRouter());
    this.app.use('/api/events/', eventRouter.getRouter());
    this.app.use('/api/user/', userRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
