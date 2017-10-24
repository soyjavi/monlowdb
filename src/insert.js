import uuid from 'uuid';
import { decrypt, encrypt, parse } from './modules';

export default state => ({

  insert(data = {}, crypto = state.crypto) {
    const { db, key, schema } = state;
    const store = db.get(key);
    const props = parse(schema, data, crypto, encrypt);
    const item = store.push({ ...schema, ...props, createdAt: new Date(), id: uuid() }).write()[0];

    return parse(schema, item, crypto, decrypt);
  },

});
