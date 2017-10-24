import { decrypt, encrypt, parse } from './modules';

export default state => ({

  find({ query, field, sortBy, limit = 1, crypto = state.crypto } = {}) {
    const { db, key, schema } = state;
    const store = db.get(key);
    let queryProps;

    if (typeof query === 'object') queryProps = parse(schema, query, crypto, encrypt);

    if (limit === 1) return parse(schema, store.find(queryProps || query).value(), crypto, decrypt);

    const items = store
      .filter(queryProps || query)
      .map(field)
      .sortBy(sortBy)
      .take(limit || 4096)
      .value() || [];

    return items.map(item => parse(schema, item, crypto, decrypt));
  },

});
