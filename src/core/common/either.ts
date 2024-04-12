type Left<T> = {
  left: T
  right?: never
}

type Right<U> = {
  left?: never
  right: U
}

export type Either<T, U> = NonNullable<Left<T> | Right<U>>

export const isLeft = <T, U>(e: Either<T, U>): e is Left<T> => {
  return e.left !== undefined
}

export const isRight = <T, U>(e: Either<T, U>): e is Right<U> => {
  return e.right !== undefined
}

export const makeLeft = <T>(value: T): Left<T> => ({ left: value })

export const makeRight = <U>(value: U): Right<U> => ({ right: value })

export const match =
  <L, R, T>(onLeft: (left: L) => T, onRight: (right: R) => T) =>
  (either: Either<L, R>): T => {
    if (isLeft(either)) {
      return onLeft(either.left)
    }

    if (isRight(either)) {
      return onRight(either.right)
    }

    throw new Error('Either is neither left nor right!')
  }
