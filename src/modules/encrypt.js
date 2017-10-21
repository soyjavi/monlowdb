import crypto from 'crypto';

const ALGORYTHM = 'aes-256-ctr';
const HEX = 'hex';
const UTF8 = 'utf8';

export default (text, password) => {
  const cipher = crypto.createCipher(ALGORYTHM, password);
  let crypted = cipher.update(text, UTF8, HEX);
  crypted += cipher.final(HEX);

  return crypted;
};
