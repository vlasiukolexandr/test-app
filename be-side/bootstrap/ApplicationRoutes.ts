import { Server } from './Server';
import {
  SimpleRoute,
} from '../routes';

export class ApplicationRoutes {
  public static register(server: Server) {
    const simpleRoute = new SimpleRoute().init();

    server.useRoute('/', simpleRoute);
  }
}
