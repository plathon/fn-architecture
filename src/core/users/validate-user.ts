import { User } from './user'
import { Either, makeLeft, makeRight } from '@/core/common/either'
import { Errors } from './enums/errors'

export type userValidationErrors = Errors.EMPTY_NAME | Errors.INVALID_NAME

export const validateUser = (
  userData: User,
): Either<userValidationErrors, User> => makeLeft(Errors.EMPTY_NAME)
