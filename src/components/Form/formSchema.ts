import { z } from "zod";

export const formSchema = z.object({
  energy: z.string().min(1, "A descrição é obrigatória"),
  width: z.string().min(3, "A descrição é obrigatória"),
  height: z.string().min(3, "A descrição é obrigatória"),
});

export type TFormValues = z.infer<typeof formSchema>;
