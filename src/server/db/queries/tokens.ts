import { Query } from '../../db';

const all = () => Query('');
const one = () => Query('', []);
const find = (column: string, value: string) => Query('SELECT * FROM Users WHERE ??=?', [column, value]);
const insert = (newUser: object) => Query('INSERT INTO User SET ?', [newUser]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, one, find, insert, update, destroy }