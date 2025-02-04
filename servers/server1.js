const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server-1 (Port 3000)');
});
server.listen(3000, () => {
    console.log('Server 1 running on http://localhost:3000');
});
