function getCommentsList(parent, args, context) {
  return context.prisma.comment.findMany()
}

module.exports = {
  getCommentsList,
}
