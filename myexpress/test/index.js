const myexpress = require("../express");

myexpress.get("/projects", (req, res) => {
  res.send("This is Projects Show Route!");
});

myexpress.listen(3031);
