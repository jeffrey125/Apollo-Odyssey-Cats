const { gql } = require('apollo-server');

const typeDefs = gql`
  "The description of a Track"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "Tracks full duration in seconds"
    durationInSeconds: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }

  "This will return the track response and the track data"
  type IncrementTrackViewsResponse {
    "Status of mutation"
    code: Int!
    "Indicates if its a success or not"
    success: Boolean!
    "UI Message"
    message: String!
    "Updated Data"
    track: Track
  }

  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track!
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module!
  }

  type Mutation {
    "Increments track views per page visit"
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
`;

module.exports = typeDefs;
