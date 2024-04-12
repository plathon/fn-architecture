import { StatusCode } from './enums/status-code'
import { Messages } from './enums/messages'

export const badRequest = (message: string) => ({
  statusCode: StatusCode.BadRequest,
  body: { message },
})

export const ok = <T>(data: T) => ({
  statusCode: StatusCode.OK,
  body: data,
})

export const internalServerError = (
  description = Messages.CouldNotProcessRequest,
) => ({
  statusCode: StatusCode.InternalServerError,
  body: { message: description },
})
