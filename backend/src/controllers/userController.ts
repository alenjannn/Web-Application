import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.json({ message: `User ${name} registered successfully!` });
};
