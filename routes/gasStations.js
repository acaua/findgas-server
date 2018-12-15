const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const { latlng } = req.query;

  if (!latlng)
    return res.status(400).json({
      error_message: "Invalid request. Missing the 'latlng' parameter."
    });

  return res.json({ latlng });
});

module.exports = router;
