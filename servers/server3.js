const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server-3 (Port 3002)');
});
server.listen(3002, () => {
    console.log('Server 3 running on http://localhost:3002');
});
