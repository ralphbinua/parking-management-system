import express from "express";

import {createUser, loginUser} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser); // sign up
router.post("/login", loginUser); // log in

export default router;