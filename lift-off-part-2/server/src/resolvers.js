const resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome()
        },
        // tracksForHomeFetch: async () => {
        //     const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com'
        //     const res = await fetch(`${baseUrl}/tracks`)
        //     return res.json()
        // },
    },
    Track: {
        // author: async ({ authorId }) => {
        //     const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com'
        //     const res = await fetch(`${baseUrl}/author/${authorId}`)
        //     return res.json()
        // },

        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId)
        },
    },
}

module.exports = resolvers

// return an array of Tracks that will be used to populate
//the homepage grid of our web client
// tracksForHome: (parent, args, context, info) => {...}

// parent - parent is the returned value of the resolver for this field's parent.
// This will be useful when dealing with resolver chains.

//args: args is an object that contains all GraphQL arguments that were provided for
// the field by the GraphQL operation. When querying for a specific item (such as a
// specific track instead of all tracks), in client-land we'll make a query with an
// id argument that will be accessible via this args parameter in server-land.
// contextValue: is an object shared across all resolvers that are executing for a
// particular operation. The resolver needs this argument to share state,
// like authentication information, a database connection, or in our case the RESTDataSource.
// info: contains information about the operation's execution state, including the field name,
// the path to the field from the root, and more.
