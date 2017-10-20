import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import path from 'path';
import fs from 'fs';

export default (state) => {
  const folder = path.resolve('.', 'store');
  if (!fs.existsSync(folder)) fs.mkdirSync(folder);

  const db = low(new FileSync(`${folder}/${state.file}.json`));
  const defaults = {};
  defaults[state.key] = [];
  db.defaults(defaults).write();
  state.db = db;

  return state;
};
