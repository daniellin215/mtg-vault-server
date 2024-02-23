import createError from "@fastify/error";

export const UnauthorizedError = createError<[string]>(
  "UnauthorizedError",
  "Unauthorized",
  401
);
