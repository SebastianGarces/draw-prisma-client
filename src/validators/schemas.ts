import { z } from 'zod'

export const schema = z.object({
	id: z.string(),
	diagram_id: z.string(),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
})
