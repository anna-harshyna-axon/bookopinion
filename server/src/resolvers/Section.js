function recommendations(parent, _, context) {
  return context.prisma.section
    .findUnique({ where: { id: parent.id } })
    .recommendations()
}

module.exports = {
  recommendations,
}
