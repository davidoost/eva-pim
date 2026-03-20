import z from "zod";

export const updateProductFormSchema = z.object({
  name: z.string("Please enter a valid name"),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  taxCode: z.string().optional(),
  published: z.boolean(),
});

export type UpdateProductFormProps = z.infer<typeof updateProductFormSchema>;
