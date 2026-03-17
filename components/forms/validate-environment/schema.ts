import z from "zod";

export const validateEnvironmentSchema = z.object({
  query: z.url("Please enter a valid url"),
});

export type ValidateEnvironmentProps = z.infer<
  typeof validateEnvironmentSchema
>;
