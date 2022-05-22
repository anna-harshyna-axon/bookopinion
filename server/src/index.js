const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const { getUserId } = require('./utils')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Comment = require('./resolvers/Comment')
const Recommendation = require('./resolvers/Recommendation')
const Section = require('./resolvers/Section')

const resolvers = {
  Query,
  Mutation,
  User,
  Comment,
  Recommendation,
  Section,
}

const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    }
  },
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))
