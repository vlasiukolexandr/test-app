import BaseRoute from './baseRoute';
import { SimpleController } from '../controllers';

export class SimpleRoute extends BaseRoute {
  public init() {
    const simpleController = new SimpleController();

    this.get('/hello', simpleController.hello);
    this.get('/formatted_json', simpleController.jsonFormat);
    return this.router;
  }
}
