const { ApolloServer } = require("apollo-server");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const moviesSchema = require("./schema/movies");
const tvSeriesSchema = require("./schema/tvseries");

const schema = makeExecutableSchema({
  typeDefs: [moviesSchema.typeDefs, tvSeriesSchema.typeDefs],
  resolvers: [moviesSchema.resolvers, tvSeriesSchema.resolvers],
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
