import { gql } from "@apollo/client";

export const FETCH_ALL = gql`
  query entertainMe {
    Movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
    tvSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const FETCH_MOVIE = gql`
  query getMovie($movieId: ID) {
    Movie(id: $movieId) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const POST_MOVIE = gql`
  mutation postMovie($postMoviePayload: inputData!) {
    postMovie(payload: $postMoviePayload) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const PUT_MOVIE = gql`
  mutation putMovie($putMovieId: ID!, $putMoviePayload: inputData!) {
    putMovie(id: $putMovieId, payload: $putMoviePayload) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($deleteMovieId: ID!) {
    deleteMovie(id: $deleteMovieId) {
      message
    }
  }
`;

export const FETCH_TV_SERIAL = gql`
  query getTVSerial($tvSerialId: ID) {
    tvSerial(id: $tvSerialId) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const POST_TV_SERIAL = gql`
  mutation PostTvSerial($postTvSerialPayload: inputData!) {
    postTVSerial(payload: $postTvSerialPayload) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const PUT_TV_SERIAL = gql`
  mutation PutTVSerialMutation(
    $putTvSerialId: ID!
    $putTvSerialPayload: inputData!
  ) {
    putTVSerial(id: $putTvSerialId, payload: $putTvSerialPayload) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export const DELETE_TV_SERIAL = gql`
  mutation DeleteTvSerialMutation($deleteTvSerialId: ID!) {
    deleteTvSerial(id: $deleteTvSerialId) {
      message
    }
  }
`;
