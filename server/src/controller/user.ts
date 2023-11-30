import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError';
import { HashedPassword, VerifyPassword } from '../utils/HashedPassword';

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

    // handle error here for conflict
};

const reqisterUser = async (
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

    // handle error here for conflict
};

const authUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const isexist = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    
    if (!isexist) return next(new AppError(400, 'Invalid Credential'));
    const verifiedPwd = await VerifyPassword(password, isexist.password);
    if(!verifiedPwd) return next(new AppError(400, 'Invalid Credential'));

    // handle here
};
