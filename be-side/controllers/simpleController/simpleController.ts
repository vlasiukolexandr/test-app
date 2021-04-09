import { Request, NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Database } from '../../database';

export class SimpleController {
  /**
   * Say "Hello world!"
   * @param req Request
   * @param res Response
   * @param next
   */
  public hello(req: Request, res: Response, next: NextFunction) {
    // Clearer response for me
    // res.status(StatusCodes.OK).send({ status: StatusCodes.OK, data: { message: 'Hello world!' }});

    // Response like in specs
    res.status(StatusCodes.OK).send('Hello world!');
  }

  /**
   * Format DB JSON
   * @param req Request
   * @param res Response
   * @param next
   */
  public jsonFormat(req: Request, res: Response, next: NextFunction) {
    Database.connection.getConnection().then(db => {
      db.ref().on('value', (snap: any) => {
        const data = snap.val();
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data, null, 2));
      });
    });
  }
}
