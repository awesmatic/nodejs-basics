import { createServer } from 'http';
const PORT = process.env.PORT || 8000;

const server = createServer((req, res) => {
  if (req.url === '/api/chlna' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'guukha' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
