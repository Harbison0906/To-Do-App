import { Query } from '../../db';


const all = (id: number) => Query('SELECT Tasks.name FROM Tasks JOIN Users ON Users.id = Tasks.userid WHERE Users.id =? AND Tasks.id=?', [id]);
const one = (id: number) => Query('SELECT Tasks.name FROM Tasks JOIN Users ON Users.id = Tasks.userid WHERE Users.id = ?', [id]);
const insert = (name: string, userid: number) => Query('INSERT INTO Tasks(name, userid) VALUES(?, ?)', [name, userid]);
const update = (id: number, name: string) => Query('UPDATE Tasks SET name=? WHERE id=?', [name, id]);
const destroy = (id: number, userid: number) => Query('DELETE FROM Tasks WHERE id=? and userid=?', [id, userid]);
const getForUser = (userid: number) => Query('SELECT * FROM Tasks WHERE userid=?', [userid])


export default { all, one, insert, update, destroy, getForUser}