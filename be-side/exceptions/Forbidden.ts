import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class Forbidden extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.FORBIDDEN, data);
  }
}
