const url = require('url');

var Router = function () {

  const handle_table = {};

  this.getFn = (req) => {
    console.log(Object.keys(handle_table));

  }

  this.get = (url, fn) => {
    console.log('teste');

    handle_table[url] = fn;
    console.log(Object.keys(handle_table))
  }

  return { get: this.get, getFn: this.getFn }
}

module.exports = Router();