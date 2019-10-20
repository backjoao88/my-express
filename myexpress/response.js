var Response = function (res) {
  
  this.res = res;
  this.send = (message) => {
    this.res.writeHeader(200, 'Content-Type', 'text/plain');
    this.res.end(message);
  }
  return { send: this.send }
}

module.exports = Response;