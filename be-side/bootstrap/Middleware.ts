import bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from './Server';
import { ErrorMiddleware, NotFoundMiddleware, ResponseMethodsMiddleware } from '../middlewares';

export class Middleware {
  private server: Server;

  public constructor(server: Server) {
    this.server = server;
  }

  public addPreRoutes() {
    //////// add json body parser middleware ////////
    this.server.useMiddleWare(bodyParser.json({ limit: '500mb' }));
    this.server.useMiddleWare(bodyParser.urlencoded({ limit: '500mb', extended: true }));

    //////// inject cors ////////
    this.server.useMiddleWare(cors());

    //////// inject success/error response methods ////////
    this.server.useMiddleWare(ResponseMethodsMiddleware.add());
  }

  public addPostRoutes() {
    //////// if nothing, then not found ////////
    this.server.useMiddleWare(NotFoundMiddleware.add());

    //////// return all exceptions in json response ////////
    this.server.useErrorMiddleWare(ErrorMiddleware.add());
  }
}
