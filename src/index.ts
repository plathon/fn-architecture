import express from 'express'
import { validateRequest } from 'zod-express-middleware'

import {
  userIndexSchema,
  userCreateSchema,
  userRemoveSchema,
  userUpdateSchema,
} from '@/schemas/routes/user-route-schema'

import { userIndexRoute } from '@/routes/user/user-index-route'
import { userCreateRoute } from '@/routes/user/user-create-route'
import { userDeleteRoute } from '@/routes/user/user-delete-route'
import { userUpdateRoute } from '@/routes/user/user-update-route'

export const app = express()
const port = 3000

app.use(express.json())

app.get('/user', validateRequest(userIndexSchema), userIndexRoute)
app.post('/user', validateRequest(userCreateSchema), userCreateRoute)
app.delete('/user/:id', validateRequest(userRemoveSchema), userDeleteRoute)
app.put('/user/:id', validateRequest(userUpdateSchema), userUpdateRoute)

app.listen(port)
