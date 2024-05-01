import User from "../../models/userModel";
import {
  addUser,
  getAllUsers,
  getUserById as getUserByIdFromDb,
  getUserByEmail as getUserByEmailFromDb,
  deleteUser as deleteUserFromDb,
  updateUser as updateUserFromDb,
} from "../../utils/db/users/UsersDb";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

async function getUsers(req: Request, res: Response) {
  getAllUsers()
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(404).json(e));
}

async function createUser(req: Request, res: Response) {
  let userReq: User = req.body.user;
  bcrypt.hash(userReq.password, 10).then((data) => {
    userReq.password = data;
    addUser(userReq)
      .then((data) => res.status(201).json(data))
      .catch((e) => res.status(403).json(e));
  });
}

async function getUserById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  getUserByIdFromDb(id)
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(404).json(e));
}

async function getUserByEmail(req: Request, res: Response) {
  const email = req.body.email;
  getUserByEmailFromDb(email)
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(404).json(e));
}

async function deleteUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  deleteUserFromDb(id)
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(404).json(e));
}

async function updateUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = req.body.user;
  updateUserFromDb(id, user)
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(404).json(e));
}

export {
  getUsers,
  createUser,
  getUserById,
  getUserByEmail,
  deleteUser,
  updateUser,
};
