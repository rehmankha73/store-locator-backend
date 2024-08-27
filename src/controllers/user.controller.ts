import { Request, Response } from "express";
import httpStatus from "http-status";
import asyncHandler from "../config/aync-handler";
import { userService } from "../services";

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {
    // res.json({ ...user, customClaims }).status(httpStatus.OK);
  }
);

export const getUsers = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await userService.getUser(req.params.id);
        res.json(user).status(httpStatus.OK);
    }
);

export const getUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await userService.getUser(req.params.id);
    res.json(user).status(httpStatus.OK);
  }
);

export const updateUser = asyncHandler(
  async (req: Request, res: Response) => {
    // res.json(user).status(httpStatus.OK);
  }
);

export const deleteUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await userService.deleteUser(req.params.id);
    res.json(user).status(httpStatus.OK);
  }
);
