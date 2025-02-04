const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server-2 (Port 3001)');
});
server.listen(3001, () => {
    console.log('Server 2 running on http://localhost:3001');
});
