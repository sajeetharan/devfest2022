// graphql-todo-server/src/schema.ts

import "graphql-import-node";
import * as typeDefs from "./schema.graphql";
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export const inMemoryDb: { todos: { [id: string]: Todo } } = {
  todos: {
    "1": {
      id: "1",
      title: "Todo 1",
      done: false,
    },
  },
};

export const resolvers: IResolvers = {
  Query: {
    getTodos(): Todo[] {
      return Object.values(inMemoryDb.todos);
    },
  },
};

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
