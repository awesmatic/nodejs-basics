import crypto from 'crypto';

const hash = crypto.createHash('sha256');
// The createHash() method of the crypto module is used to create a hash object that can be used to generate a hash value for a given input. The 'sha256' algorithm is specified as the hashing algorithm to be used.
// hash.update('awesmatic');
// The update() method of the hash object is used to add data to the hash. In this case, the string 'awesmatic' is added to the hash. The data can be added in multiple calls to update(), and the final hash value will be based on all the data that has been added.
// console.log(hash.digest('hex'));
// The digest() method of the hash object is used to calculate the final hash value based on the data that has been added to the hash. The 'hex' argument specifies that the output should be in hexadecimal format. The resulting hash value is then logged to the console.

// crypto.randomBytes(16, (err, buffer) => {
//   if (err) throw err;
//   console.log(buffer.toString('hex'));
// });
// The randomBytes() method of the crypto module is used to generate a buffer containing cryptographically strong pseudo-random bytes. In this case, 16 random bytes are generated. The callback function is called with an error (if any) and the generated buffer. The buffer is then converted to a hexadecimal string using the toString('hex') method and logged to the console.

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted,"encrypted data");
// The createCipheriv() method of the crypto module is used to create a cipher object that can be used to encrypt data. The 'aes-256-cbc' algorithm is specified as the encryption algorithm to be used, along with a randomly generated key and initialization vector (IV). The update() method of the cipher object is used to add data to be encrypted, and the final() method is called to complete the encryption process. The resulting encrypted data is then logged to the console in hexadecimal format.

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted,"decrypted data");

