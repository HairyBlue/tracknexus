import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from './utils/AppError';
const PORT = 3002;
const app = express();

app.use(
    cors({
        origin: '*',
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(404, 'Page not found'));
});

app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
    error.status = error.status || 500;
    if (!error.message) error.message = 'Oh no something went wrong';
    res.status(error.status).json({ error: error.message });
});

app.listen(PORT, () => {
    console.log('Server is running');
});
