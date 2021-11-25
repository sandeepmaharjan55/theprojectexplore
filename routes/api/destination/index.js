const listDestination = require("./listDestination");

module.exports = (app) => {
  app.use("/api/destination/listDestination", listDestination);
};
