import uuid from 'uuid';
import { encrypt, decrypt, parse } from './modules';

export default state => ({

  update({ query = {}, data = {}, upsert = false, crypto = state.crypto }) {
    const { db, key, schema } = state;
    const store = db.get(key);
    const queryProps = parse(schema, query, crypto, encrypt);
    let item = store.find(queryProps).value();
    const props = parse(schema, data, crypto, encrypt);

    if (item) {
      item = store
        .find({ id: item.id })
        .assign({ ...props, updatedAt: new Date() })
        .write();
    } else if ((!item || !item.id) && props && upsert) {
      item = store
        .push({
          ...schema,
          ...queryProps,
          ...props,
          createdAt: new Date(),
          id: uuid(),
        })
        .write();
    }

    return parse(schema, item, crypto, decrypt);
  },
});
