import bcrypt from 'bcrypt';

export async function HashedPassword(pwd: string) {
    return await bcrypt.hash(pwd, 10);
}

export async function VerifyPassword(pwd: string, hashed: string) {
    return await bcrypt.compare(pwd, hashed);
}

