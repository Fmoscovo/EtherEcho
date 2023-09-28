const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Mock card data" }); // just sending a mock message
});

module.exports = router;
