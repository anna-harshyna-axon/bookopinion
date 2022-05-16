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
    throw new Error('No such user found')
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

async function deleteComment(parent, args, context, info) {
  return await context.prisma.comment.deleteMany({})
}

module.exports = {
  signup,
  login,
  postComment,
  deleteComment,
  updateMyProfile,
}
