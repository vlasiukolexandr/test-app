import { ApplicationRoutes } from './ApplicationRoutes';
import { Database } from '../database';
import { Server } from './Server';
import { Middleware } from './Middleware';
import { config } from '../config';

export class Application {
  private server: Server;
  private middleware: Middleware;

  constructor() {
    this.server = new Server();
    this.middleware = new Middleware(this.server);
  }

  // Starts loading additional settings
  public boot() {
    this.register();
  }

  private registerPreApiRouterMiddlewares() {
    this.middleware.addPreRoutes();
  }

  private registerPostApiRouterMiddlewares() {
    this.middleware.addPostRoutes();
  }

  private registerRoutes() {
    ApplicationRoutes.register(this.server);
  }

  private register() {
    this.registerPreApiRouterMiddlewares();
    this.registerRoutes();
    this.registerPostApiRouterMiddlewares();

    Database.init(config.firebaseConfig).then(() => {
      this.server.start(+config.env.port);
    });
  }
}
