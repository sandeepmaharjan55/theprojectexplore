const destinationL = require("./destination");
const destinationOverview = require("./destinationOverview");
const destinationGallery = require("./destinationGallery");

module.exports = (app) => {
  app.use("/api/destination", destinationL);
  app.use("/api/destinationoverview", destinationOverview);
  app.use("/api/destinationgallery", destinationGallery);
};
