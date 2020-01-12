import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import graphqlDepthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import cors from 'cors';
import compression from 'compression';
import schema from './schema';

const app = express();
const port = process.env.PORT || 8080;
const server = new ApolloServer({ schema, validationRules: [graphqlDepthLimit(7)] });

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(port, () => console.log(`\n🚀
GraphQL is now running on http://localhost:${port}/graphql`));
