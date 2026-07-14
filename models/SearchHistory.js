const mongoose = require("mongoose");

// Search History collection: Location, Latitude, Longitude, Search Date
const searchHistorySchema = new mongoose.Schema({
  location: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  searchDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SearchHistory", searchHistorySchema);
