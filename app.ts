import fastify from "fastify";

export async function build(opts = {}) {
  const app = fastify(opts);

  app.get("/ping", async (request, reply) => {
    return "ponged\n";
  });

  app.setErrorHandler(async (error, request, reply) => {
    request.log.error(error);
    reply.status(error.statusCode || 500);
    return { error: error.message };
  });

  return app;
}
