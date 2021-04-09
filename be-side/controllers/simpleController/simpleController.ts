import { Request, NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class SimpleController {
  /**
   * Say "Hello world!"
   * @param req Request
   * @param res Response
   * @param next
   */
  public static async hello(req: Request, res: Response, next: NextFunction) {
    // Clearer response for me
    // res.status(StatusCodes.OK).send({ status: StatusCodes.OK, data: { message: 'Hello world!' }});

    // Response like in specs
    res.status(StatusCodes.OK).send('Hello world!');
  }
}
