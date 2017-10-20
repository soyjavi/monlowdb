export default state => ({

  find({ query, field, sortBy, limit = 1 } = {}) {
    const store = state.db.get(state.key);
    let item;
    if (limit === 1) {
      item = store.find(query);
    } else {
      item = store
        .filter(query)
        .map(field)
        .sortBy(sortBy)
        .take(limit || 4096);
    }

    return item.value();
  },

});
