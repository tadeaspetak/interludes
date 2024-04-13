import { z } from "zod";

export const poemValidator = z.object({
  id: z.string().uuid(),
  text: z.string(),
  title: z.string().optional(),
});

export type Poem = z.infer<typeof poemValidator>;
