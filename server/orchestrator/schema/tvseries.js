const { gql, ApolloError } = require("apollo-server");
const tvSeriesAPI = require("../apis/tvSeriesAPI");
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql`
  type TvSerial {
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
    tvSeries: [TvSerial]
    tvSerial(id: ID): TvSerial
  }

  type Mutation {
    postTVSerial(payload: inputData!): TvSerial
    putTVSerial(id: ID!, payload: inputData!): TvSerial
    deleteTvSerial(id: ID!): message
  }
`;

const resolvers = {
  Query: {
    async tvSeries() {
      try {
        const cache = await redis.get("tvSeries");
        if (!cache) {
          const { data } = await tvSeriesAPI.get("/");
          redis.set("tvSeries", JSON.stringify(data));
          return data;
        } else {
          return JSON.parse(cache);
        }
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async tvSerial(parent, args) {
      try {
        const { data } = await tvSeriesAPI.get(`/${args.id}`);
        return data;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
  Mutation: {
    async postTVSerial(parent, args) {
      try {
        const { data } = await tvSeriesAPI.post("/", args.payload);

        redis.del("tvSeries");
        redis.del("entertainMe");

        return data;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async putTVSerial(parent, args) {
      try {
        const { data } = await tvSeriesAPI.put(`/${args.id}`, args.payload);

        redis.del("tvSeries");
        redis.del("entertainMe");

        return data;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async deleteTvSerial(parent, args) {
      try {
        await tvSeriesAPI.delete(`/${args.id}`);

        redis.del("tvSeries");
        redis.del("entertainMe");

        return {
          message: `You have been successfully deleted a tv serial data`,
        };
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
