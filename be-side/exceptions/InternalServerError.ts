import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class InternalServerError extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR, data);
  }
}
