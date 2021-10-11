const { gql, ApolloError } = require("apollo-server");
const moviesAPI = require("../apis/moviesAPI");
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type message {
    message: String
  }

  input inputData {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type Query {
    Movies: [Movie]
    Movie(id: ID): Movie
  }

  type Mutation {
    postMovie(payload: inputData!): Movie
    putMovie(id: ID!, payload: inputData!): Movie
    deleteMovie(id: ID!): message
  }
`;

const resolvers = {
  Query: {
    async Movies() {
      try {
        const cache = await redis.get("movies");
        if (!cache) {
          const { data } = await moviesAPI.get("/");
          redis.set("movies", JSON.stringify(data));
          return data;
        } else {
          return JSON.parse(cache);
        }
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async Movie(parent, args) {
      try {
        const { data } = await moviesAPI.get(`/${args.id}`);
        return data;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
  Mutation: {
    async postMovie(parent, args) {
      try {
        const { data } = await moviesAPI.post("/", args.payload);

        redis.del("movies");
        redis.del("entertainMe");

        return data;
      } catch (err) {
        console.log(err);
        throw new ApolloError(err);
      }
    },
    async putMovie(parent, args) {
      try {
        const { data } = await moviesAPI.put(`/${args.id}`, args.payload);

        redis.del("movies");
        redis.del("entertainMe");

        return data;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async deleteMovie(parent, args) {
      try {
        await moviesAPI.delete(`/${args.id}`);

        redis.del("movies");
        redis.del("entertainMe");

        return { message: `You have been successfully deleted a movie data` };
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
