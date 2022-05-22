function getComments(parent, args, context) {
  return context.prisma.comment.findMany()
}

function getSection(parent, args, context) {
  return context.prisma.section.findUnique({
    where: { id: Number(args.filter) },
  })
}

async function getMyProfile(parent, args, context) {
  const { userId } = context

  return await context.prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}

async function getRecommendations(parent, { filter }, context) {
  return await context.prisma.recommendation.findMany({
    where: {
      section: { id: filter },
    },
  })
}

module.exports = {
  getComments,
  getMyProfile,
  getRecommendations,
  getSection,
}
