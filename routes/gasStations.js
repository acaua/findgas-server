const express = require("express");
const axios = require("axios");

const { parseAddress, parseGasStations } = require("../mapUtils");

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

  const gasStationsRequest = axios.get(
    `https://maps.googleapis.com/maps/api/place/search/json?location=${latlng}&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`
  );

  Promise.all([addressRequest, gasStationsRequest]).then(
    ([addressResponse, gasStationsResponse]) => {
      const addressData = parseAddress(addressResponse.data.results[0]);
      const gasStationsData = parseGasStations(
        gasStationsResponse.data.results
      );

      return res.json({ ...addressData, postos: gasStationsData });
    }
  );
});

module.exports = router;
