export default (schema = {}, data = {}) => {
  const props = {};

  Object.keys(schema).forEach((attr) => {
    if (data[attr]) props[attr] = data[attr];
  });

  return props;
};
