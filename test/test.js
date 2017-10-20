import MonlowDB from '../src';

const User = new MonlowDB({
  file: 'db',
  key: 'users',
  schema: {
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    skills: [],
    state: 'draft',
    pro: false,
  },
  // -- @TODO
  salt: 'hash',
  pepper: 'pepper',
});

// -- Create a user
const userCreated = User.insert({ username: 'soyjavi', nombre: 'Francisco ja' });
console.log('User', userCreated);

// -- Update (or upsert) by query object
const userUpdated = User.update({
  query: { username: 'soyjavi' },
  data: { firstName: 'Javi', apellido: 'Jimenez' },
  upsert: true,
});
console.log('userUpdated', userUpdated);

// -- Update by query function
const userUpdatedFn = User.update({
  query: ({ username }) => username === 'mallu',
  data: { firstName: 'Mallukitxu' },
  upsert: true,
});
console.log('userUpdatedFn', userUpdated);

// -- Find elements
let users = User.find({
  query: { firstName: 'Javi' },
  // field: 'username',
  limit: 0,
})
console.log('find_1', users);

// -- Find elements with limit and limit (1)
users = User.find({
  query: { firstName: 'Javi' },
})
console.log('find_2', users);

// -- Find elements with a query function
users = User.find({
  query: ({ firstName, username }) => firstName === 'Javi',
  limit: 0,
})
console.log('find_3', users);

// -- Find elements with a query function and limit (1)
users = User.find({
  query: ({ firstName, username }) => firstName === 'Javi' && username === 'soyjavi',
})
console.log('find_4', users);

// -- Remove elements by a query object
users = User.remove({
  query: { username: 'soyjavi' }
});
console.log('remove_query_obj', users);

// -- Remove elements by a query function
users = User.remove({
  query: ({ firstName }) => firstName === 'Mallukitxu'
});
console.log('remove_query_fn', users);

// -- Reset
console.log('reset', User.reset());
