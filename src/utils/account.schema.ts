import { z } from "zod";

export const accountSchema = z
  .object({
    cpf: z.string("CPF é obrigatório").min(1, "cpf"),
    birthDate: z.date(),
    email: z.email(),
    fone: z.string().optional(),
  })
  .strict();

export type Account = z.infer<typeof accountSchema>;
