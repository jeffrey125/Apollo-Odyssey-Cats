const { gql } = require('apollo-server');

const typeDefs = gql`
  "The description of a Track"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int!
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }

  type Query {
    "This will return the list of track"
    tracksForHome: [Track!]!
    "This will return the specific track"
    track(id: ID!): Track
  }
`;

module.exports = typeDefs;
