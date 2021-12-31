const user = require("./api/users");
// const imageUpload = require("./imageUpload");
const seed = require("./seed");
const destination = require("./api/destination/");
const dashboard = require("./api/dashboard");
const aqi = require("./fetch/aqiFetch");

module.exports = (app) => {
  app.use("/seed", seed);
  app.use("/aqi", aqi);
  app.use("/api/users", user);
  app.use("/api/dashboard", dashboard);
  destination(app);
};
