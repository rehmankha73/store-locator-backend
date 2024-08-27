import { Router } from "express";

import {createUser} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post('', createUser);
// userRoutes.route('/').get(getUsers);
// userRoutes.route('/:id').get(getUser);
// userRoutes.route('/:id').patch(updateUser);
// userRoutes.route('/:id').delete(deleteUser);

export default userRoutes;
