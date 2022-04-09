const fs = require("fs");
const basicAuth = require("../util/basic-auth");
module.exports = (app) => {
  app.get("/api/contacts", (req, res) => {
    try {
      console.log(req.headers);
      basicAuth(req.headers.authorization);
      const contacts = JSON.parse(fs.readFileSync("./contacts0.json"));
      res.send(contacts);
    } catch (e) {
      console.log(e.message);
      res.send(e.message);
    }
  });
};
