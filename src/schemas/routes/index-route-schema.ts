import { z } from 'zod'

export const indexRouteRequestSchema = {
  body: z.object({
    name: z.string(),
  }),
}
