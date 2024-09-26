import { z } from "zod"

export const formSchema = z.object({
    productTitle: z.string()
        .min(5, 'Product title must be at least 5 characters').max(20,'Product title must be less than 20 characters'),
    description: z.string()
        .min(15, 'Product description must be of at least 10 characters').max(50, 'Product title must be less than 50 characters'),
})

