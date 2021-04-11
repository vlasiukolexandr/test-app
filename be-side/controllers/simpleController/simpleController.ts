import { Request, NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  StatElement
} from '../../types/StatElement';

import { Database } from '../../database';

const MIN_RANK = 10;

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

  /**
   * Get Top 5
   * @param req Request
   * @param res Response
   * @param next
   */
  public stats(req: Request, res: Response, next: NextFunction) {
    Database.connection.getConnection().then(db => {
      db.ref('data').on('value', (snap: any) => {
        const data: StatElement[] = snap.val();
        data.sort((a, b) => b.downloads - a.downloads);
        res.status(StatusCodes.OK).send(data.slice(0, 5));
      });
    });
  }
  
  /**
   * Get Top
   * @param req Request
   * @param res Response
   * @param next
   */
  public topRanked(req: Request, res: Response, next: NextFunction) {
    Database.connection.getConnection().then(db => {
      db.ref('data').on('value', (snap: any) => {
        let data: StatElement[] = snap.val();
        data = data.filter(el => Object.values(el.rank_history).some(place => place <= MIN_RANK));
        data = data.sort((a, b) => {
          const daysTopA = Object.values(a.rank_history).filter(place => place <= MIN_RANK).length;
          const daysTopB = Object.values(b.rank_history).filter(place => place <= MIN_RANK).length;

          return daysTopB - daysTopA;
        });
        res.status(StatusCodes.OK).send(data);
      });
    });
  }
}
