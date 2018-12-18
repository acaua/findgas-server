# Find gas API

API using Express.js with a single endpoint that receives lat,lng coordinates and returns the location of the coordinate, address info and a list of open gas stations nearby.

You can find an example client in React here:
<https://github.com/acaua/findgas-client>

## Endpoint

```
/api/gasstations?latlng=<lat>,<lng>
```

## Response

```
{
  "lat": -23.5655625,
  "lng": -46.6472389,
  "endereco": {
    "numero": "1967",
    "logradouro": "Avenida Brigadeiro Luís Antônio",
    "bairro": "Bela Vista",
    "cidade": "São Paulo",
    "estado": "SP",
    "cep": "04002-010"
  },
  "postos": [
    {
      "lat": -23.5597654,
      "lng": -46.57735239999999,
      "nome": "Shell (Rede Duque)",
      "endereco": "Avenida Salim Farah Maluf, 3400 - Vila Bertioga, São Paulo"
    },
    {
      "lat": -23.55331,
      "lng": -46.6584,
      "nome": "AUTO POSTO BELA CINTRA LTDA",
      "endereco": "Rua Fernando de Albuquerque, 216 - Consolação, São Paulo"
    },
    {
      "lat": -23.5300399,
      "lng": -46.6778527,
      "nome": "Posto Ipiranga",
      "endereco": "Rua Cayowaá, 45 - Perdizes, São Paulo"
    },
    {
      "lat": -23.6031717,
      "lng": -46.6258529,
      "nome": "Posto Shell",
      "endereco": "Avenida Doutor Ricardo Jafet, 3274 - Saúde, São Paulo"
    }
  ]
}

```
