function comments(parent, _, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).comments()
}

function favorites(parent, _, context) {
  return context.prisma.user
    .findUnique({ where: { id: parent.id } })
    .favorites()
}
module.exports = {
  comments,
  favorites,
}
