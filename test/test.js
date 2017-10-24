import MonlowDB from '../src';
import { encrypt, parse } from '../src/modules';

const crypto = 'hell0w0rld';
const User = new MonlowDB({
  file: 'db',
  key: 'users',
  schema: {
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    skills: [],
    state: undefined,
    pro: false,
  },
  crypto,
});

// -- Reset
console.log('reset', User.reset());

// -- Create a user
const userOne = User.insert({ username: 'soyjavi', lastName: 'Jimenez Villar', nombre: 'Francisco ja' });
console.log('User', userOne);

const userTwo = User.insert({ username: 'yam', lastName: 'Kaewnoi' });
console.log('User', userTwo);

User.insert({ username: 'mallu', firstName: 'Mallukitxu' });


// -- Update (or upsert) by query object
const userUpdated = User.update({
  query: { username: 'soyjavi' },
  data: { firstName: 'Javi', apellido: 'Jimenez' },
  // upsert: true,
});
console.log('userUpdated', userUpdated);

// // -- Update by query function
// const userUpdatedFn = User.update({
//   query: ({ username }) => username === 'mallu',
//   data: { firstName: 'Mallukitxu' },
//   upsert: true,
// });
// console.log('userUpdatedFn', userUpdated);
//
// // -- Find elements
let users = User.find({
  query: { firstName: 'Javi' },
  // field: 'username',
  limit: 0,
});
console.log('find_1', users);

// -- Find elements with limit and limit (1)
users = User.find({
  query: { firstName: 'Javi' },
});
console.log('find_2', users);

// // -- Find elements with a query function
users = User.find({
  query: ({ firstName }) => firstName === encrypt('Javi', crypto),
  limit: 0,
});
console.log('find_3', users);

// -- Find elements with a query function and limit (1)
users = User.find({
  query: ({ firstName, username }) => firstName === encrypt('Javi', crypto) && username === encrypt('soyjavi', crypto),
});
console.log('find_4', users);

// -- Remove elements by a query object
users = User.remove({
  query: { username: 'yam' },
});
console.log('remove_query_obj', users);

// -- Remove elements by a query function
users = User.remove({
  query: ({ firstName }) => firstName === encrypt('Mallukitxu', crypto),
});
console.log('remove_query_fn', users);
