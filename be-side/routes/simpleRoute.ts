import BaseRoute from './baseRoute';
import { SimpleController } from '../controllers';

export class SimpleRoute extends BaseRoute {
  public init() {
    this.get('/hello', SimpleController.hello);
    return this.router;
  }
}
