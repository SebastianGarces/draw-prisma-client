import { z } from 'zod'
import { schema } from './schemas'

export const diagram = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string().datetime(),
	updatedAt: z.string().datetime(),
	schema: schema,
})
