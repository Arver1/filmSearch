const path = require('path');
const fs = require('fs');

function route(req, res){
  const extensions = path.extname(req.url);
  const filename = req.url.slice(1);
  let contentType = '';
  switch(extensions) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.css' :
      contentType = 'text/css';
      break;
    case '.js' :
      contentType = 'text/javascript';
      break;
    case '.png' :
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/plain';
  }
  const stream = fs.createReadStream(path.resolve(filename));
  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  stream.pipe(res);
  stream.on('error', error => {
    if(error.code === 'ENOENT') {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.end('Not Found');
    } else {
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end(error.message);
    }
  })
}

console.log(path.extname('/js/app.view'));
module.exports = route;