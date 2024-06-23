import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ContactRoutes } from './app/modules/contact/contact.routes';
import { notFound } from './app/middlewares/notFoundError';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors())

app.use(
  cors({
    origin: ['https://contactmanagementfrontend-semon69s-projects.vercel.app'],
    credentials: true,
  }),
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from contact management applicatation!');
});

app.use('/api/contact', ContactRoutes);
app.use(notFound);
app.use(globalErrorHandler);

export default app;
