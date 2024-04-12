import express from 'express'
import { validateRequest } from 'zod-express-middleware'

import { indexRouteRequestSchema } from '@/schemas/routes/index-route-schema'

import { indexRoute } from '@/routes/index-route'

export const app = express()
const port = 3000

app.use(express.json())

app.post('/', validateRequest(indexRouteRequestSchema), indexRoute)

app.listen(port)
