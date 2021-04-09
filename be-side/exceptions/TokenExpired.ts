import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class TokenExpiredError extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.PROXY_AUTHENTICATION_REQUIRED, data);
  }
}
