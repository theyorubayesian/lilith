import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


const SQLZ: any = Sequelize // TODO: Resolve error: Property 'sync' does not exist on type 'Sequelize'
export const sequelize = new SQLZ({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': config.dialect,
  'storage': ':memory:',
});
