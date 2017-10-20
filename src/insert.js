import uuid from 'uuid';
import { consolidate } from './modules';

export default state => ({

  insert(data = {}) {
    const { db, key, schema } = state;
    const store = db.get(key);
    const id = uuid();
    const props = consolidate(schema, data);

    store.push({ ...schema, ...props, createdAt: new Date(), id }).write();

    return store.find({ id }).value();
  },

});
