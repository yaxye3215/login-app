import express  from 'express';
import { getAllUsers, getUser, register } from '../controller/userController.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/:id").get(getUser);
router.route("/").get(getAllUsers);
export default router;