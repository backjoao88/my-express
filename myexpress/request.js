
const url = require('url');

var Request = function (req) {
  this.req = req;
  this.params = '';
  this.query = url.parse(this.req.url, true).query;
  return { params: this.params, query: this.query }
}

module.exports = Request;