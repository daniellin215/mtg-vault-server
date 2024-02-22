import fastify from "fastify";

export async function build(opts = {}) {
  const app = fastify(opts);

  app.get("/ping", async (request, reply) => {
    return "ponged\n";
  });

  return app;
}
