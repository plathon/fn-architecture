import { Response } from 'express'
import { TypedRequestQuery } from 'zod-express-middleware'
import { userIndexSchema } from '@/schemas/routes/user-route-schema'

import { ok } from '@/helpers/http-helper'
import { User } from '@/core/users/user'

export const userIndexRoute = async (
  request: TypedRequestQuery<typeof userIndexSchema.query>,
  response: Response,
): Promise<void> => {
  const { query } = request
  const users: User[] = [{ name: 'John' }, { name: 'Erick' }]
  const result = ok(users)
  response.status(result.statusCode).json(result.body)
}
