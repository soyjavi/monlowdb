export default state => ({

  reset() {
    state.db
      .set(state.key, [])
      .write();
  },

});
