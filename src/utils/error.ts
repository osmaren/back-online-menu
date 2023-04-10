import { Response } from "express";
export class ErrorHandler extends Error {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
export const handleError = (err: ErrorHandler, res: Response) => {
  const { message, statusCode } = err;
  res.status(err.statusCode || 400).send({
    status: "error",
    statusCode,
    message,
  });
};
