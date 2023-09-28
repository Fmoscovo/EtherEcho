const express = require("express");
const mtg = require("mtgsdk");

const router = express.Router();

router.get("/card/:id", async (req, res) => {
  try {
    const card = await mtg.card.find(req.params.id);
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch card" });
  }
});

// Add more routes as required...

module.exports = router;
