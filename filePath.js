import { fileURLToPath  } from "url";
import path from "path";

// the path module provides utilities for working with file and directory paths. It can be used to manipulate file paths in a way that is consistent across different operating systems.
// const fileName = "a/b/c/d.txt"

// console.log(path.basename(fileName));
// console.log(path.dirname(fileName));
// console.log(path.extname(fileName));
// console.log(path.parse(fileName));

// fileURLToPath() is a method that converts a file URL to a file path. It is used to get the file path of the current module in Node.js. The import.meta.url property returns the URL of the current module, which can be passed to fileURLToPath() to get the file path.
const __filename = fileURLToPath (import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);


// join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. It can be used to create a file path from multiple segments.
const filePath = path.join(__dirname, "a/b/c/d.txt");
console.log(filePath);
// resolve() method resolves a sequence of paths or path segments into an absolute path. It can be used to get the absolute path of a file or directory.
const filePath2 = path.resolve(__dirname, "a/b/c/d.txt");
console.log(filePath2);


// they are similar in that they both create a file path from multiple segments, but they differ in how they handle the segments. join() simply concatenates the segments together, while resolve() resolves the segments into an absolute path. This means that if any of the segments are absolute paths, resolve() will ignore the previous segments and return the absolute path of the last segment.
