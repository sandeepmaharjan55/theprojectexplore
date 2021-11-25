const user = require("./api/users");
// const imageUpload = require("./imageUpload");
const seed = require("./seed");
const destination = require("./api/destination/");
const dashboard = require("./api/dashboard");

module.exports = (app) => {
  app.use("/seed", seed);
  app.use("/api/users", user);
  app.use("/api/dashboard", dashboard);
  destination(app);
};
