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

module.exports = {
  section,
  comments,
}
