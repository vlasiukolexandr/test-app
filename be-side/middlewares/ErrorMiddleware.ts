import { NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export class ErrorMiddleware {
  static add() {
    return (err: any, _req: any, res: any, _next: NextFunction) => {
      if (res.headersSent) {
        res.end();
      }
      res.status(err.status || StatusCodes.BAD_REQUEST).json({
        success: false,
        message: err.message,
        error: err.stack || err,
        data: err.data,
      });
    };
  }
}
