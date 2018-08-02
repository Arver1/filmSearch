const http = require('http');
const route = require('./routes/public');
const home = require('./routes/home');

http.createServer((req, res) => {
  if(req.url.match(/\.(html|css|js|png)$/)){
    route(req, res);
  } else if(req.url === '/') {
    home(req, res);
  } else if(req.url.startsWith('/serach')) {

  } else {

  }
}).listen(3000, () => console.log('Server get started'));
