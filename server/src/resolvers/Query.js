function getCommentsList(parent, args, context) {
  return context.prisma.comment.findMany()
}

function getUsers(parent, args, context) {
  return context.prisma.user.findMany()
}

module.exports = {
  getCommentsList,
  getUsers,
}
