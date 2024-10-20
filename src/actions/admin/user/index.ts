import {db} from "@/lib/db";

export async function adduser(name: string, email: string, password: string) {
    try {
        const user = await db.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
        });
        console.log(user);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export async function getUsers() {
    try {
        const users = await db.user.findMany({
            where: {
                role: "USER",
            },
        });
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export async function deleteUser(userId: string) {
    const deleteUser = await db.user.delete({
        where: {
            id: userId,
        },
    });
}
 