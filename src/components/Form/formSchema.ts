import { z } from "zod";

export const formSchema = z.object({
  energy: z.string().min(1, "Required field"),
  width: z.string().min(3, "Required field"),
  height: z.string().min(3, "Required field"),
});

export type TFormValues = z.infer<typeof formSchema>;
