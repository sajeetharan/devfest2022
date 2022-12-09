// src/index.ts

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import cors from "cors";
import { schema } from "./schema";

const host = "0.0.0.0";
const port = 8080;
const app = express();
const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: "/graphql" });
const httpServer = createServer(app);
httpServer.listen({ host, port }, (): void =>
  console.log(
    `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
  )
);
