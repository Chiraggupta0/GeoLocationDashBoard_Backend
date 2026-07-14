const express = require("express");
const router = express.Router();
const SearchHistory = require("../models/SearchHistory");

// GET /api/history - list all searches (most recent first)
router.get("/", async (req, res) => {
  try {
    const history = await SearchHistory.find().sort({ searchDate: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/history - save a new search
router.post("/", async (req, res) => {
  try {
    const { location, latitude, longitude } = req.body;
    const entry = await SearchHistory.create({ location, latitude, longitude });
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
