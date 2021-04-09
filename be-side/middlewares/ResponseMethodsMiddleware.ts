import { StatusCodes } from 'http-status-codes';
import { NextFunction } from 'express';

export class ResponseMethodsMiddleware {
  static add() {
    return (_req: any, res: any, next: NextFunction) => {
      res.success = (data: any, extra: any = null) => {
        res.isHandled = true;
        res.status(StatusCodes.OK).json({
          success: true,
          data,
          extra,
        });
      };
      res.error = (error: any) => {
        res.isHandled = true;
        res.status(error.status || StatusCodes.BAD_REQUEST).json({
          success: false,
          error: error,
        });
      };
      next();
    };
  }
}
