function section(parent, _, context) {
  return context.prisma.recommendation
    .findUnique({ where: { id: parent.id } })
    .section()
}

module.exports = {
  section,
}
