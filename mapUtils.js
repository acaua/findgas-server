const parseAddress = addressData => {
  const address = addressData.address_components.reduce(
    (address, component) => {
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
    },
    {}
  );

  return {
    lat: addressData.geometry.location.lat,
    lng: addressData.geometry.location.lng,
    endereco: address
  };
};

const parseGasStations = gasStationData => {
  return gasStationData.map(gasStation => {
    return {
      lat: gasStation.geometry.location.lat,
      lng: gasStation.geometry.location.lng,
      nome: gasStation.name,
      endereco: gasStation.vicinity
    };
  });
};

module.exports = { parseAddress, parseGasStations };
