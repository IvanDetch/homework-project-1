console.log("Hello, world!");

// Тестовая страница
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Test Page</title>
      </head>
      <body>
        <h1>Welcome to my Test Page!</h1>
        <p>This is a simple Node.js server displaying HTML.</p>
      </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});