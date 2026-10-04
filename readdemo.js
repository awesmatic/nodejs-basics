// import fs from 'fs';
import fs from 'fs/promises';

// asynchronous version (callback runs later)
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// synchronous version (blocks until the file is read)
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);


// Promise version (returns a promise)
// fs.readFile('./text.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async/await version (blocks until the file is read)
const readFileAsync = async (filePath) => {
  try {
    const data = await fs.readFile('./text.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const writeFileAsync = async () => {
  try {
    await fs.writeFile('./text.txt', 'who am i? -> ');
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
    throw err;
  }
};
writeFileAsync()
// readFileAsync();


const appendFileAsync = async () => {
  try {
    await fs.appendFile('./text.txt', ' awesmatic');
    console.log('File appended successfully', readFileAsync());
  } catch (err) {
    console.error(err);
    throw err;
  }
};
writeFileAsync()
// readFileAsync();
appendFileAsync();
