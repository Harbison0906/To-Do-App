import { Query } from '../../db';


const all = (id: number) => Query('SELECT Tasks.name FROM Tasks JOIN Users ON Users.id = Tasks.userid WHERE Users.id =? AND Tasks.id=?', [id]);
const one = (id: number) => Query('SELECT Tasks.name FROM Tasks JOIN Users ON Users.id = Tasks.userid WHERE Users.id = ?', [id]);
const insert = (name: string) => Query('INSERT INTO Tasks SET name=?', [name]);
const update = (id: number, name: string) => Query('UPDATE Tasks SET name=? WHERE id=?', [name, id]);
const destroy = (id: number) => Query('DELETE FROM Tasks WHERE id=?', [id]);



export default { all, one, insert, update, destroy }