const http = require('http');
const router = require('./router');

const requestWrapper = require('./request');
const responseWrapper = require('./response');

var MyExpress = function () {

  this.get = (url, fn) => {
    router.get(url, fn);
  }

  this.server = http.createServer((req, res) => {
    console.log('he')
    const request = requestWrapper(req);
    const response = responseWrapper(res);

    var fn = router.getFn(req);
    if (fn) {
      fn(request, response);
    } else {
      res.end("Route was not defined!");
    }

  });

  this.listen = (port) => {
    console.log('Listening at => ' + port)
    this.server.listen(port);
  }

  return { server: server, listen: listen, get: get }

}

module.exports = MyExpress();