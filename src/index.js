// const { ApolloServer, PubSub } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');
const Mutation = require('./resolvers/Mutation');
const fs = require('fs');
const path = require('path');
const { getUserId } = require('./utils');
const express = require('express');
const app = express();

// const pubsub = new PubSub();

const prisma = new PrismaClient({
  errorFormat: 'minimal',
});

const resolvers = {
  Mutation,
};

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
  });
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  introspection: true,
  playground: true,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });
const PORT = process.env.PORT || 4000;

// #8 Set the port that the Express application will listen to
app.listen(PORT, () => {
  console.log(`🚀 Server ready at ${PORT}`);
});
