import { Query } from '../../db';

const all = () => Query('');
const one = (id: number) => Query('SELECT name, email FROM Users WHERE id=?', [id]);
const find = (column: string, value: string | number) => Query('SELECT * FROM Users WHERE ??=?', [column, value]);
const insert = (newUser: object) => Query('INSERT INTO Users SET ?', [newUser]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, one, find, insert, update, destroy }