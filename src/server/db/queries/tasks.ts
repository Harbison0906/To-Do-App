import { Query } from '../../db';


const all = () => Query('SELECT * FROM Tasks');
const one = (id: number) => Query('SELECT * FROM Tasks WHERE id=?', [id]);
const insert = (name: string) => Query('INSERT INTO Tasks SET name=?', [name]);
const update = (id: number, name: string) => Query('UPDATE Tasks SET name=? WHERE id=?', [name, id]);
const destroy = (id: number) => Query('DELETE FROM Tasks WHERE id=?', [id]);



export default { all, one, insert, update, destroy }