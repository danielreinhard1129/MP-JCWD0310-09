import { hashPassword } from "@/lib/bcrypt";
import prisma from "@/prisma";
import { User } from "@prisma/client";
import cuid from "cuid";

interface IRegisterOrganizerArgs extends Pick<
    User, "firstName" | "lastName" | "email" | "password" | "role" | "referralCode">{}

export const registerOrganizerService = async (
    body: IRegisterOrganizerArgs
) => {
    try {
        const { firstName, lastName, email, password, referralCode } = body;
        const exitingUser = await prisma.user.findFirst({
            where: { email },
        });

        if (exitingUser) {
            throw new Error("Email already exist");
        }

        const hashedPassword = await hashPassword(password);
        const generateReferral = cuid();

        const newUser = await prisma.$transaction(async (transaction) => {
            const user = await prisma.user.create({
                data: { 
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    role: "ORGANIZER",
                    referralCode: generateReferral,
                }
            });

            await transaction.userDetail.create({
                data: {
                    userId: user.id,
                    isVerified: false,
                }
            })
        });

        return {
            message: "Registration as Organizer success",
            data: newUser,
        }
    } catch (error) {
        throw error;
    }
}