/** @type {import ('fastify').FastifyPluginAsync<>} */
import { FromSchema } from "json-schema-to-ts";
import { FastifyInstance } from "fastify";
import { getAuth } from "firebase-admin/auth";

export default async function signup(server: FastifyInstance) {
  server.post<{ Body: FromSchema<typeof signupBody> }>(
    "/v1/auth/signup",
    {
      schema: {
        body: signupBody,
        response: {
          201: {
            type: "string",
          },
        },
      },
    },
    async (request, reply) => {
      const { email, password } = request.body;
      return await getAuth().createUser({
        email,
        password,
      });
    }
  );
}
