function addedBy(parent, _, context) {
  return context.prisma.favorite
    .findUnique({ where: { id: parent.id } })
    .addedBy()
}

function addedRecommendation(parent, _, context) {
  return context.prisma.favorite
    .findUnique({ where: { id: parent.id } })
    .addedRecommendation()
}

module.exports = {
  addedBy,
  addedRecommendation,
}
