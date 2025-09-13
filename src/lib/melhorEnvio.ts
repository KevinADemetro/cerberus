import axios from "axios";

export const melhorEnvioClient = axios.create({
  baseURL: process.env.MELHOR_ENVIO_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const cepFrom = process.env.MELHOR_ENVIO_CEP_FROM;

export const from = {
  name: "Loja Exemplo",
  phone: "48999999999",
  email: "contato@loja.com",
  document: "87765972022",
  state_register: "",
  address: "Rua X",
  complement: "Sala 1",
  number: "100",
  district: "Centro",
  city: "Criciuma",
  country_id: "BR",
  postal_code: "88010000",
  state_abbr: "SC",
  note: "Pedido teste",
};

export const to = {
  name: "Cliente Y",
  phone: "11999999999",
  email: "cliente@exemplo.com",
  document: "97509874033",
  company_document: "",
  state_register: "",
  address: "Av Y",
  complement: "Apto 101",
  number: "200",
  district: "Centro",
  city: "Tubarão",
  country_id: "BR",
  postal_code: "88706201",
  state_abbr: "SC",
  note: "Entrega teste",
};

export const options = {
  insurance_value: 100.0,
  receipt: false,
  own_hand: false,
  reverse: false,
  non_commercial: false,
};

export const products = [
  {
    name: "Camiseta",
    quantity: "1",
    unitary_value: "100.00",
    volumes: [
      {
        height: 15,
        width: 15,
        length: 20,
        weight: 1000,
      },
    ],
  },
];
