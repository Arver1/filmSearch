const http = require('http');
const {route, home, search, notFound } = require('./routes');

http.createServer((req, res) => {
  if(req.url.match(/\.(html|css|js|png)$/)){
    route(req, res);
  } else if(req.url === '/') {
    home(req, res);
  } else if(req.url.startsWith('/search')) {
    search(req, res);
  } else {
    notFound(req, res);
  }
}).listen(3000, () => console.log('Server get started'));
