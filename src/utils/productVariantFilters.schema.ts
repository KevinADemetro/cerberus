import { z } from "zod";

export const productVariantFiltersSchema = z
  .object({
    cor: z.string().optional(),
    tamanho: z.string().optional(),
    categoria: z.string().optional(),
  })
  .strict();

export type ProductVariantFilters = z.infer<typeof productVariantFiltersSchema>;
