import store from './store';
import insert from './insert';
import find from './find';
import update from './update';
import remove from './remove';
import reset from './reset';

export default ({ crypto, file = 'db', key = 'model', schema = {} } = {}) => {
  const state = { crypto, file, key, schema };

  return Object.assign(
    {},
    store(state),

    insert(state),
    find(state),
    update(state),
    remove(state),
    reset(state),
  );
};
