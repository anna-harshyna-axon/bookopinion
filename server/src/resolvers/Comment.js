function postedBy(parent, _, context) {
  return context.prisma.comment
    .findUnique({ where: { id: parent.id } })
    .postedBy()
}

function belongsTo(parent, _, context) {
  return context.prisma.comment
    .findUnique({ where: { id: parent.id } })
    .belongsTo()
}

module.exports = {
  postedBy,
  belongsTo,
}
