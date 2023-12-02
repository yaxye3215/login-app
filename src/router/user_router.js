import express  from 'express';
import { getUser, register } from '../controller/userController.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/:id").get(getUser);
export default router;