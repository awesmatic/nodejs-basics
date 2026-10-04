import url from 'url';

const urlString = 'https://www.example.com/path/to/resource?query=helloworld';

const urlObject = new URL(urlString);
// The URL class is a built-in class in Node.js that provides a way to parse and manipulate URLs. It can be used to extract different parts of a URL, such as the protocol, hostname, pathname, search parameters, and more. The URL class also provides methods for manipulating the URL, such as adding or removing search parameters, changing the protocol or hostname, and more.

console.log(urlObject);
// URL {
//   href: 'https://www.example.com/path/to/resource?query=helloworld',
//   origin: 'https://www.example.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com',
//   hostname: 'www.example.com',
//   port: '',
//   pathname: '/path/to/resource',
//   search: '?query=string',
//   searchParams: URLSearchParams { 'query' => 'string' },
//   hash: '#hash'
// }


console.log(url.format(urlObject));
// The format() method of the URL class is used to convert a URL object back into a string representation of the URL. It can be used to get the full URL string from a URL object, which can be useful for logging or displaying the URL in a user interface.

console.log(import.meta.url);
// The import.meta.url property is a special property in Node.js that provides the URL of the current module. It can be used to get the file path of the current module, which can be useful for loading resources or files relative to the module's location.

console.log(url.fileURLToPath(import.meta.url));
// The fileURLToPath() method of the url module is used to convert a file URL to a file path. It can be used to get the file path of the current module in Node.js, which can be useful for loading resources or files relative to the module's location.

console.log(urlObject.search);
// The search property of the URL class is used to get the query string of a URL. It can be used to extract the query parameters from a URL, which can be useful for processing user input or making API requests.


const params = new URLSearchParams(urlObject.search);

params.append('d', 'dhoom');
params.delete('d');

console.log(params);
