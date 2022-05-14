const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const allComments = await prisma.comment.findMany()
  console.log(allComments)
}

main()
  .catch(e => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })
