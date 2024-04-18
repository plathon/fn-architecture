import { z } from 'zod'

export const environmentSchema = z.object({
  CLERK_SECRET_KEY: z.string(),
})
