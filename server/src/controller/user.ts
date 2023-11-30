import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError';
import { HashedPassword, VerifyPassword } from '../utils/PasswordHash';

const prisma = new PrismaClient();

const reqisterCoAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password } = req.body;
    const hashedpassword = await HashedPassword(password);
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedpassword,
            role: 'COADMIN',
        },
    });
};

const reqisterAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password } = req.body;
    const hashedpassword = await HashedPassword(password);

    const exist = await prisma.user.findFirst({
        where: {
            role: 'ADMIN',
        },
    });
    if (exist) return next(new AppError(409, 'Admin already created'));
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedpassword,
            role: 'ADMIN',
        },
    });
    res.status(200).json({
        message: 'Succesfully reqisted an admin',
    });
};

const reqisterEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password } = req.body;
    const hashedpassword = await HashedPassword(password);
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedpassword,
            role: 'EMPLOYEE',
        },
    });
};

