import { z } from "zod";

export const userSchema = z
  .object({
    cpf: z
      .string("CPF é obrigatório")
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    birthDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
    email: z.email("E-mail inválido"),
    phone: z
      .string()
      .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido")
      .optional(),
  })
  .strict();

export type User = z.infer<typeof userSchema>;
