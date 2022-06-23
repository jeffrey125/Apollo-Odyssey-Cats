// Our query method

const resolvers = {
  // Query Operation
  Query: {
    // This will fetch the data to populate the homepage
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // This will query the specific track if the User clicks a card
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },

    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },
  },

  // Mutation Operation
  Mutation: {
    // Increment track numberOfViews prop
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },

  // Resolver Chain Pattern
  // The parent params will access the parent return value which is the tracksforHome
  Track: {
    // This will populate the author details by relying on the parent query return
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    // This will populate the module list by relying on the parent query return
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
    durationInSeconds: ({ length }) => length,
  },

  Module: {
    durationInSeconds: ({ length }) => length,
  },
};

module.exports = resolvers;
