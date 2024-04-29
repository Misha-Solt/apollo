const gql = require('graphql-tag')

const typeDefs = gql`
    type Mutation {
        "Mutate an Object"
        incrementTrack(id: ID!): IncrementTrackViewsResponse!
    }
    type IncrementTrackViewsResponse {
        "Similar to HTTP status code, represent the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated track after a sucessful mutation"
        track: Track
    }

    type Spacecat {
        id: ID!
        "Spacecat's first and last name"
        name: String!
        "Spacecat's profile picture"
        photo: String
    }
    type Query {
        "Query to get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        "Fetch a specific track, provided a track's ID"
        track(id: ID!): Track!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main Author"
        author: Author!
        "The track's illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
        "The track's compleate description"
        description: String
        "The number of times a track has been viewed"
        numberOfViews: Int
        "Modules"
        modules: [Module!]!
    }

    "A module is a single unit of teaching."
    type Module {
        id: ID!
        "The module title"
        title: String!
        "The module length"
        length: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture"
        photo: String
    }
`

module.exports = typeDefs
