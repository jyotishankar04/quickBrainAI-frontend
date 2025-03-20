import z from "zod";

export const createNoteValidator = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be between 1 and 30 characters" })
    .max(30, { message: "Title must be between 1 and 30 characters" }),
  description: z
    .string()
    .min(1, { message: "Description must be between 1 and 255 characters" })
    .max(255, { message: "Description must be between 1 and 255 characters" }),
  category: z.string().min(1).optional(),
  isPrivate: z.boolean().default(false),
  tags: z.string().array().optional(),
  file: z.any(),
});
