import { Exception } from './Exception';
import { StatusCodes } from 'http-status-codes';

export class Duplicate extends Exception {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.CONFLICT, data);
  }
}
