import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class UnprocessableEntity extends Exception {
  public reason?: any;

  constructor(message: string, reason: any, data?: any) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY, data);

    if (reason) this.reason = reason;
  }
}
