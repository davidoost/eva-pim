import z from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginProps = z.infer<typeof loginSchema>;
