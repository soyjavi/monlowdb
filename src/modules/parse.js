const autoKeys = ['id', 'createdAt', 'updatedAt'];

export default (schema = {}, data, crypto, method = () => {}) => {
  if (data === undefined) return undefined;

  const props = {};
  let value;

  Object.keys(schema).forEach((key) => {
    value = data[key];
    // props[key] = value;
    // if (value && crypto && typeof value === 'string') props[key] = method(value, crypto);
    if (value) props[key] = crypto && typeof value === 'string' ? method(value, crypto) : value;
  });

  autoKeys.forEach((key) => {
    value = data[key];
    if (value) props[key] = value;
  });

  return props;
};
