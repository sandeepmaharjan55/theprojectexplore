const destinationL = require("./destination");
const destinationOverview = require("./destinationOverview");
const destinationGallery = require("./destinationGallery");
const destinationEvent = require("./destinationEvent");

module.exports = (app) => {
  app.use("/api/destination", destinationL);
  app.use("/api/destinationoverview", destinationOverview);
  app.use("/api/destinationgallery", destinationGallery);
  app.use("/api/destinationevent", destinationEvent);
};
