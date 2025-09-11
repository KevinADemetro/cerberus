import axios from "axios";

export const melhorEnvioClient = axios.create({
  baseURL: process.env.MELHOR_ENVIO_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const cepFrom = process.env.MELHOR_ENVIO_CEP_FROM;
