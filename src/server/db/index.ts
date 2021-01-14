import config from '../config';
import * as mysql from 'mysql';
import { string } from 'prop-types';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any> (query: string, value?: any) => {
  return new Promise<T> ((resolve, reject) => {
    const sql = mysql.format(query, value);
    pool.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

import tasks from './queries/tasks';
import tokens from './queries/tokens';
import users from './queries/users';

export default {
  tasks,
  tokens,
  users
}