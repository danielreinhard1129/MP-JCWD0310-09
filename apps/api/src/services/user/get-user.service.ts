import prisma from "@/prisma";

export const getUserService = async (id: number) => {
    try {
        const user = await prisma.user.findFirst({
            where: { id },
            include: { userDetail: true },
        });

        if (!user) {
            throw new Error("User not found");
        }

        return {
            message: "Get user by id success",
            data: user,
        };
    } catch (error) {
        throw error;
    }
}