# Find gas API

API using Express.js with a single endpoint that receives lat,lng coordinates and returns the location of the coordinate, address info and a list of open gas stations nearby.

You can find an example client in React here:
<https://github.com/acaua/findgas-client>

## Endpoint

```
/api/gasstations?latlng=<lat>,<lng>
```

Example using the default server port:

```
http://localhost:5000/api/gasstations?latlng=-23.5655625,-46.6472385
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

# Downloading and usage instructions

1.  Clone repository

```
git clone https://github.com/acaua/findgas-server.git
```

2.  cd into server folder

```
cd findgas-server
```

3.  Install dependencias

```
npm install
```

4.  Start server in development mode

```
npm run server
```

5.  Start server

```
npm start
```

6.  Deploy to now <https://zeit.co/now>

```
now
```

7. Enjoy! 😎
