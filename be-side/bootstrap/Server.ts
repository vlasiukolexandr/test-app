import express from 'express';
import { Request, Response, Application, NextFunction } from 'express';

export class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.disable('x-powered-by');
  }

  /**
   * Use route
   * @param route
   * @param callback
   */
  public useRoute(route: string, callback: (req: Request, res: Response, next: NextFunction) => void) {
    this.app.use(route, callback);
  }

  /**
   * Use middle wares
   * @param callback
   */
  public useMiddleWare(callback: (req: Request, res: Response, next: NextFunction) => void) {
    this.app.use(callback);
  }

  /**
   * Use middle wares
   * @param callback
   */
  public useErrorMiddleWare(callback: (err: any, req: Request, res: Response, next: NextFunction) => void) {
    this.app.use(callback);
  }

  /**
   * Start listening to request
   * @param port port number
   */
  public start(port: number) {
    this.app.listen(port, () => {
      console.log('Listening to Port', port);
    });
  }
}
