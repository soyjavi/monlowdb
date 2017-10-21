import encrypt from './encrypt';

export default (schema = {}, data = {}, crypto) => {
  const props = {};

  Object.keys(schema).forEach((attr) => {
    if (data[attr]) props[attr] = crypto ? encrypt(data[attr], crypto) : data[attr];
  });

  return props;
};
