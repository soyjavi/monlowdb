import crypto from 'crypto';

const ALGORYTHM = 'aes-256-ctr';
const HEX = 'hex';
const UTF8 = 'utf8';

export default (text, password) => {
  const decipher = crypto.createDecipher(ALGORYTHM, password);
  let decrypted = decipher.update(text, HEX, UTF8);
  decrypted += decipher.final(UTF8);

  return decrypted;
};
