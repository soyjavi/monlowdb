export default state => ({

  remove({ query }) {
    return state.db.get(state.key)
      .remove(query)
      .write();
  },

});
