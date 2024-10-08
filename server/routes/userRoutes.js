import express from "express";
import userController from "../Controller/userController.js";
const router = express.Router();



router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getOneUser); // 동적 라우팅(id가 바뀌는)
router.post("/user", userController.addUser);

export default router;
