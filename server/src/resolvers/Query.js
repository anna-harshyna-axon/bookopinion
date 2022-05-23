async function getComments(parent, args, context) {
  return await context.prisma.comment.findMany()
}

async function getSection(parent, args, context) {
  return await context.prisma.section.findUnique({
    where: { id: Number(args.filter) },
  })
}

async function getRecommendationDetails(parent, args, context) {
  return await context.prisma.recommendation.findUnique({
    where: { id: Number(args.id) },
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
  getRecommendationDetails,
}
