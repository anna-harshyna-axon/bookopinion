function getCommentsList(parent, args, context) {
  return context.prisma.comment.findMany()
}

function getMyProfile(parent, args, context) {
  const { userId } = context

  return context.prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}

module.exports = {
  getCommentsList,
  getMyProfile,
}
