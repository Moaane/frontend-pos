import { z } from "zod";

export const CategorySchema = z
  .object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      })
      .min(1, { message: "name is requiredF" }),
  })
  .required();

export type CategorySchemaType = z.infer<typeof CategorySchema>;

export const UpdateCategorySchema = z
  .object({
    id: z
      .string({
        required_error: "id is required",
        invalid_type_error: "id must ba a string",
      })
      .min(1, { message: "id is required" })
      .uuid("id must ba an uuid"),
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      })
      .min(1, { message: "name is requiredF" }),
  })
  .required();

export type UpdateCategorySchemaType = z.infer<typeof UpdateCategorySchema>;
