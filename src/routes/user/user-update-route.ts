import { Response } from 'express'
import { TypedRequestParams, TypedRequestBody } from 'zod-express-middleware'
import { userUpdateSchema } from '@/schemas/routes/user-route-schema'

import { ok } from '@/helpers/http-helper'

export const userUpdateRoute = async (
  request: TypedRequestParams<typeof userUpdateSchema.params> &
    TypedRequestBody<typeof userUpdateSchema.body>,
  response: Response,
): Promise<void> => {
  const { params, body } = request
  const result = ok({ result: 1 })
  response.status(result.statusCode).json(result.body)
}
