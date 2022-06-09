function section(parent, _, context) {
  return context.prisma.recommendation
    .findUnique({ where: { id: parent.id } })
    .section()
}

function comments(parent, _, context) {
  return context.prisma.recommendation
    .findUnique({ where: { id: parent.id } })
    .comments()
}

function favorites(parent, _, context) {
  return context.prisma.recommendation
    .findUnique({ where: { id: parent.id } })
    .favorites()
}

module.exports = {
  section,
  comments,
  favorites,
}
