function comments(parent, _, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).comments()
}

module.exports = {
  comments,
}
