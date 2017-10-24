import { encrypt, parse } from './modules';

export default state => ({

  remove({ query, crypto = state.crypto }) {
    const { db, key, schema } = state;
    const store = db.get(key);
    let queryProps;

    if (typeof query === 'object') queryProps = parse(schema, query, crypto, encrypt);

    return store.remove(queryProps || query).write();
  },

});
