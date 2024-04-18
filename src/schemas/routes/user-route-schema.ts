import { z } from 'zod'

export const userIndexSchema = {
  query: z.object({
    queryKey: z.string(),
  }),
}

export const userCreateSchema = {
  body: z.object({
    name: z.string(),
  }),
}

export const userUpdateSchema = {
  body: z.object({
    name: z.string(),
  }),
  params: z.object({
    id: z.string(),
  }),
}

export const userRemoveSchema = {
  params: z.object({
    id: z.string(),
  }),
}
