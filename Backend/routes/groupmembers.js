const express = require("express");
const router = express.Router();

const groupMembers = ["Alice", "Bob", "Charlie", "David", "Bolade"];

router.get("/", (req, res) => {
  res.json({ groupMembers });
});

module.exports = router;
