import { NextFunction } from 'express';
import { NotFound } from '../exceptions';

export class NotFoundMiddleware {
  static add() {
    return (req: any, res: any, _next: NextFunction) => {
      if (!res.isHandled) {
        res.error(new NotFound('Route Not Found', { route: req.path }));
        res.end();
      }
    };
  }
}
