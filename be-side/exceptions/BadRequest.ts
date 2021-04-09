import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class BadRequest extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.BAD_REQUEST, data);
  }
}
