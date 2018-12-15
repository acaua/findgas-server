const express = require("express");
const axios = require("axios");

const { parseAddress } = require("../mapUtils");

const router = express.Router();

router.get("/", (req, res) => {
  const { latlng } = req.query;

  if (!latlng)
    return res.status(400).json({
      error_message: "Invalid request. Missing the 'latlng' parameter."
    });

  const addressRequest = axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`
  );

  Promise.all([addressRequest]).then(([addressResponse]) => {
    const data = parseAddress(addressResponse.data.results[0]);

    return res.json(data);
  });
});

module.exports = router;
