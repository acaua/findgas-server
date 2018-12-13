# Teste de desenvolvimento Back End Node.js

[![N|Solid](https://pixter.com.br/wp-content/uploads/2018/06/logo-black.png)](http://pixter.com.br)

## A proposta do teste é:
## Criar uma API que através de uma latitude e longitude buscar
### Dados de endereço:
```
https://maps.googleapis.com/maps/api/geocode/json?latlng=-23.5655625,-46.6472389&sensor=false&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

### Postos de combustíveis abertos ao redor
```
https://maps.googleapis.com/maps/api/place/search/json?location=-23.5655625,-46.6472389&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So
```

### Request:
```
  {
      "lat": "-23.5655625",
      "lng": "-46.6472389"
  }
```

### Response:
```
  {
    "lat": "-23.5655625",
      "lng": "-46.6472389"
      "endereco": {
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Bela Vista",
        "logradouro": "Avenida Paulista",
        "numero": "1374",
        "cep": "01310100" //se existir
      },
      "postos": [
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        {
          "lat": "-23.5655625",
          "lng": "-46.6472389",
          "nome": "AUTO POSTO PAULISTA",
          "endereco": "Avenida Paulista, 2537"
        },
        ...
      ]
  }
```


### Requisitos:

  - Desenvolver em Javascript, nativo ou utilizando qualquer framework da linguagem
  - Promisse
  - Promisse All
  - Filter
  - Map
  - Object.assign()

### Entrega:

  - Clone este repositório
  - Desenvolva sua aplicação
  - Crie um pull request quando finalizar
  - Envie-nos um e-mail confirmando a finalização