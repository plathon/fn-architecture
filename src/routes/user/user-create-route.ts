import { Response } from 'express'
import { pipe } from 'ramda'
import { TypedRequestBody } from 'zod-express-middleware'
import { userCreateSchema } from '@/schemas/routes/user-route-schema'

import { isLeft } from '@/core/common/either'
import { createUser } from '@/core/users/create-user'
import { validateUser } from '@/core/users/validate-user'

import { created, badRequest } from '@/helpers/http-helper'

export const userCreateRoute = async (
  request: TypedRequestBody<typeof userCreateSchema.body>,
  response: Response,
): Promise<void> => {
  const { body } = request
  const createUserPipe = pipe(createUser, validateUser)
  const userOrError = createUserPipe(body)
  if (isLeft(userOrError)) {
    const result = badRequest(userOrError.left)
    response.status(result.statusCode).json(result.body)
    return
  }
  const user = created(userOrError.right)
  response.status(user.statusCode).json(user.body)
}
