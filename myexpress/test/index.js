const myexpress = require('../express');

myexpress.get('/projects/:id/show', (req, res) => {
  res.send("This is Projects Show Route!");
});

myexpress.listen(3031);



