import { ifElse } from 'ramda'

import { User } from './user'
import { Either, makeLeft, makeRight } from '@/core/common/either'
import { Errors } from './enums/errors'

export type userValidationErrors = Errors.EMPTY_NAME | Errors.INVALID_NAME

export const validateUser = (
  userData: User,
): Either<userValidationErrors, User> =>
  ifElse(
    name => !!name,
    () => makeRight(userData),
    () => makeLeft(Errors.INVALID_NAME),
  )(userData.name)
