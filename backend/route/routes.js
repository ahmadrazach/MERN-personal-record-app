import express from "express";
import { addUser } from "../controller/userController.js";
import { getUsers,getUserById } from "../controller/userController.js";

const route=express.Router();
route.get('/',getUsers);
route.post('/add',addUser);
route.get('/id/:id', getUserById);

export default route 