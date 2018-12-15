const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  const { latlng } = req.query;

  if (!latlng)
    return res.status(400).json({
      error_message: "Invalid request. Missing the 'latlng' parameter."
    });

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`
    )
    .then(function(response) {
      const result = response.data.results[0];

      const address = result.address_components.reduce((address, component) => {
        if (component.types.includes("administrative_area_level_1")) {
          return { ...address, estado: component.short_name };
        } else if (component.types.includes("administrative_area_level_2")) {
          return { ...address, cidade: component.long_name };
        } else if (component.types.includes("sublocality_level_1")) {
          return { ...address, bairro: component.long_name };
        } else if (component.types.includes("route")) {
          return { ...address, logradouro: component.long_name };
        } else if (component.types.includes("street_number")) {
          return { ...address, numero: component.short_name };
        } else if (component.types.includes("postal_code")) {
          return { ...address, cep: component.short_name };
        }

        return address;
      }, {});

      const data = {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
        endereco: address
      };

      return res.json(data);
    });
});

module.exports = router;
