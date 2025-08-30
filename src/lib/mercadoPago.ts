import { MercadoPagoConfig } from "mercadopago";

const mercadoPagoClient = new MercadoPagoConfig({
  accessToken: process.env.PROD_ACCESS_TOKEN ?? "",
});

export default mercadoPagoClient;
