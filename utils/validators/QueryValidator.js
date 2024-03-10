export const QueryValidator = z.object({
    category: z.string().optional(),
    sort: z.enum(['asc', 'desc']).optional(),
    category: z.number().optional()
})