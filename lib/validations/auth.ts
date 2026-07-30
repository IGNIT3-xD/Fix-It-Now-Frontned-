import { z } from "zod";

export const signupSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(20, "Name must be less than 20 characters"),

    email: z.email("Please enter a valid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password is too long"),

    role: z.enum(["CUSTOMER", "TECHNICIAN"], {
        error: "Please select a role",
    }),

    profilePicture: z
        .instanceof(File)
        .optional()
        .refine(
            (file) => !file || file.size <= 3 * 1024 * 1024,
            "Profile picture must be less than 3MB"
        )
        .refine(
            (file) =>
                !file ||
                ["image/jpeg", "image/png", "image/webp"].includes(file.type),
            "Only JPEG, PNG or WebP images are allowed"
        ),
});

export const loginSchema = z.object({
    email: z.email("Please enter a valid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password is too long"),
})

export type SignupFormValues = z.infer<typeof signupSchema>
export type LoginFormValues = z.infer<typeof loginSchema>