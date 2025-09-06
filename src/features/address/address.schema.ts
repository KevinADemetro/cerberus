import { z } from "zod";

export const addressSchema = z
  .object({
    cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
    receiverName: z.string().min(2, "Nome do destinatário é obrigatório"),
    street: z.string().min(2, "Endereço é obrigatório"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(2, "Bairro é obrigatório"),
    city: z.string().min(2, "Cidade é obrigatória"),
    state: z.string().min(2, "Estado é obrigatório"),
  })
  .strict();

export type Address = z.infer<typeof addressSchema>;

export const cepSchema = z
  .object({
    cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  })
  .strict();

export type Cep = z.infer<typeof cepSchema>;
