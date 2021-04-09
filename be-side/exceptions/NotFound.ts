import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class NotFound extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.NOT_FOUND, data);
  }
}
