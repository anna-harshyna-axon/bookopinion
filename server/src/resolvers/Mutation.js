const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.user.create({ data: { ...args, password } })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  })

  if (!user) {
    throw new Error('Invalid password')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function postComment(parent, args, context, info) {
  const { userId } = context

  return await context.prisma.comment.create({
    data: {
      content: args.content,
      createdAt: new Date(),
      postedBy: { connect: { id: userId } },
      belongsTo: { connect: { id: Number(args.recommendationId) } },
    },
  })
}

async function updateMyProfile(parent, args, context, info) {
  return await context.prisma.user.update({
    where: {
      id: Number(args.id),
    },
    data: {
      name: args.name,
    },
  })
}

async function updateComment(parent, args, context, info) {
  return await context.prisma.comment.update({
    where: {
      id: Number(args.commentId),
    },
    data: {
      content: args.content,
    },
  })
}

async function deleteComment(parent, args, context, info) {
  return await context.prisma.comment.delete({
    where: {
      id: Number(args.commentId),
    },
  })
}

async function getComment(parent, args, context) {
  return await context.prisma.comment.findUnique({
    where: {
      id: Number(args.commentId),
    },
  })
}

async function addToFavorites(parent, args, context, info) {
  const { userId } = context

  return await context.prisma.favorite.create({
    data: {
      addedBy: { connect: { id: userId } },
      addedRecommendation: { connect: { id: Number(args.recommendationId) } },
    },
  })
}

async function deleteFromFavorites(parent, args, context, info) {
  return await context.prisma.favorite.delete({
    where: {
      id: Number(args.favoriteId),
    },
  })
}

module.exports = {
  signup,
  login,
  postComment,
  addToFavorites,
  deleteComment,
  updateMyProfile,
  getComment,
  updateComment,
  deleteFromFavorites,
}
