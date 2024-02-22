import fastify from "fastify";
import { initializeApp, App, applicationDefault } from "firebase-admin/app";

const server = fastify();

const firebaseApp: App = initializeApp({
  credential: applicationDefault(),
});

server.get("/ping", async (request, reply) => {
  return "ponged\n";
});

server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(
    `Server is listening at ${address}, NODE_ENV: ${process.env.NODE_ENV}`
  );
});
