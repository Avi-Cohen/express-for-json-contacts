const fs = require("fs");
const basicAuth = require("../util/basic-auth");
module.exports = (app) => {
  app.get("/api/contacts", (req, res) => {
    try {
      // basicAuth(req.headers.authorization);
      const contacts = JSON.parse(fs.readFileSync("./contacts0.json")).filter(
        (item) => item.email?.toLowerCase().includes(req.query.srsearch)
      );
      res.send(contacts);
    } catch (e) {
      console.log(e.message);
      res.send(e.message);
    }
  });
};
