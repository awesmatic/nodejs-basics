import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// const PORT = Number(process.env.PORT) || 5000;
const PORT = process.env.PORT


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let filePath;
    if (req.url === '/') {
      filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
      filePath = path.join(__dirname, 'about.html');
    }

    if (filePath) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end(`<h1>Internal Server Error yahi se hai error</h1>`);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === '/about') {
       filePath = path.join(__dirname, 'about.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end(`<h1>Internal Server Error</h1>`);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`<h1>Page Not Found</h1>`);
    }
  }

  // res.setHeader('content-type', 'text/html') for setting the content type
  // res.statusCode = 400; for setting the status code
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // for setting the status code and content type
  // res.end(`<h1>hello world!</h1>`);
  // for sending the response to the client

  // console.log(req.url);
  // console.log(req.method);
  // the above two lines are for logging the request url and method to the console
  // if (req.url === '/') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end(`<h1>home page</h1>`);
  // } else if (req.url === '/about') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end(`<h1>about page</h1>`);
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'text/html' });
  //   res.end(`<h1>page not found</h1>`);
  // }

});
server.listen(PORT, () => {
  console.log(`server is listing in port ${PORT}`)
});
