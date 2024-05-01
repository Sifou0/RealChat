import User from "../../../models/userModel";
import prisma from "../prisma";

async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

async function getUserById(id: number): Promise<User | null> {
  try {
    return await prisma.user.findUnique({ where: { id: id } });
  } catch (e) {
    throw e;
  }
}

async function getUserByEmail(email: string): Promise<User | null> {
  try {
    return await prisma.user.findUnique({ where: { email: email } });
  } catch (e) {
    throw e;
  }
}

async function addUser(user: User): Promise<User> {
  try {
    return await prisma.user.create({ data: user });
  } catch (e) {
    throw e;
  }
}

async function deleteUser(id: number): Promise<User> {
  try {
    return await prisma.user.delete({ where: { id: id } });
  } catch (e) {
    throw e;
  }
}

async function updateUser(id: number, user: User): Promise<User | null> {
  try {
    return await prisma.user.update({ where: { id: id }, data: user });
  } catch (e) {
    throw e;
  }
}

export {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
  deleteUser,
  updateUser,
};
