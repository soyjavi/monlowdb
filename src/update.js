import uuid from 'uuid';
import { consolidate } from './modules';

export default state => ({

  update({ query, data, upsert = false }) {
    const { db, key, schema } = state;
    const store = db.get(key);
    const item = store.find(query).value();
    let id;

    const props = consolidate(schema, data);

    if (item) {
      store
        .find(query)
        .assign({ ...schema, ...item, updatedAt: new Date(), ...props })
        .write();
    } else if ((!item || !item.id) && props && upsert) {
      id = uuid();
      store
        .push({ ...schema, id, createdAt: new Date(), ...query, ...props })
        .write();
    }

    return (id || item) ? store.find({ id: id || item.id }).value() : undefined;
  },

});
