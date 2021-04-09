import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class UnauthorizedError extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.UNAUTHORIZED, data);
  }
}
