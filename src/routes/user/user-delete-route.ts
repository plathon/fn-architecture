import { Response } from 'express'
import { TypedRequestParams } from 'zod-express-middleware'
import { userRemoveSchema } from '@/schemas/routes/user-route-schema'

import { ok } from '@/helpers/http-helper'

export const userDeleteRoute = async (
  request: TypedRequestParams<typeof userRemoveSchema.params>,
  response: Response,
): Promise<void> => {
  const { params } = request
  const result = ok({ result: 1 })
  response.status(result.statusCode).json(result.body)
}
