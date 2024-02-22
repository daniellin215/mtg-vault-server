import { initializeApp, App, applicationDefault } from "firebase-admin/app";
import { build } from "./app";

const firebaseApp: App = initializeApp({
  credential: applicationDefault(),
});

const opts = {
  logger: true,
};

const server = await build(opts);
try {
  const address = await server.listen({ port: 8080, host: "0.0.0.0" });
  console.log(
    `Server is listening at ${address}, NODE_ENV: ${process.env.NODE_ENV}`
  );
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
