const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/packages", (req, res) => {
  let data = [{
    "id": 5483012,
    "order": "#101",
    "customer": "Vitor Victor Isaac Peixoto",
    "carrierDeadline": "3 dias",
    "trackingNumber": "NUVEM123521",
    "freightType": "Correios PAC via Nuvem Envio",
    "freight": 5.4,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 2167435,
    "order": "#102",
    "customer": "Miguel Arthur Pedro Henrique Campos",
    "carrierDeadline": "2 dias",
    "trackingNumber": "NUVEM000123",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 12.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 2342341,
    "order": "#105",
    "customer": "Vitória Rebeca Sophia Rocha",
    "carrierDeadline": "5 dias",
    "trackingNumber": "NUVEM423653",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 50.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 642341,
    "order": "#110",
    "customer": "Mariane Heloisa Stefany",
    "carrierDeadline": "5 dias",
    "trackingNumber": "NUVEM31254",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 50.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 5483012,
    "order": "#101",
    "customer": "Emanuelly Marcela Moreira",
    "carrierDeadline": "3 dias",
    "trackingNumber": "NUVEM123521",
    "freightType": "Correios PAC via Nuvem Envio",
    "freight": 5.4,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 32423,
    "order": "#134",
    "customer": "João do Santos Peixoto",
    "carrierDeadline": "4 dias",
    "trackingNumber": "NUVEM002323",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 12.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 54353,
    "order": "#145",
    "customer": "Adenilson Soares da Silva",
    "carrierDeadline": "5 dias",
    "trackingNumber": "NUVEM42341",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 50.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 43432,
    "order": "#153",
    "customer": "Gustavo Lins de Souza",
    "carrierDeadline": "5 dias",
    "trackingNumber": "NUVEM34321",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 220.5,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  },
  {
    "id": 23212,
    "order": "#693",
    "customer": "Patricia Leite",
    "carrierDeadline": "5 dias",
    "trackingNumber": "NUVEM53x1",
    "freightType": "Correios SEDEX via Nuvem Envio",
    "freight": 69.0,
    "currency": "BRL",
    "status": "Aguardando Envio",
    "status_type": 'waiting'
  }];

  const index = {init: 0, end: 3};

  switch(parseInt(req.query.page)) {
    case 1: index.init = 0; index.end = 3; break;
    case 2: index.init = 3; index.end = 6; break;
    case 3: index.init = 6; index.end = 9; break;
    default: index.init = 0; index.end = 3;
  }

  console.log('======= index', index);

  res.json({
    data: data.splice(index.init, index.end),
    total: 9
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
