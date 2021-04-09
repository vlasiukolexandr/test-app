import { Connection } from './connection';

export class Database {
  public static connection = Connection;

  static async init(configs: any) {
    const connection = await Connection.initConnection(configs);

    return this;
  }
}
