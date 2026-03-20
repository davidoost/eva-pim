import z from "zod";

export const createProductFormSchema = z.object({
  name: z.string("Please enter a valid name"),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  taxCode: z.string().optional(),
  published: z.boolean(),
});

export type CreateProductFormProps = z.infer<typeof createProductFormSchema>;
