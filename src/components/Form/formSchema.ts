import { z } from "zod";

export const formSchema = z.object({
  energy: z.string().min(4, "Minimum 4 characters are required"),
  width: z.string().min(3, "Minimum 3 characters are required"),
  height: z.string().min(3, "Minimum 3 characters are required"),
});

export type TFormValues = z.infer<typeof formSchema>;
