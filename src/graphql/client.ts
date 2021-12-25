import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPH_TOKEN}`
  }
})

export default client
