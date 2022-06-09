// import { Prisma, PrismaClient } from '@prisma/client'

// const client = new PrismaClient()

// try {
//   await client.user.create({ data: { email: 'alreadyexisting@mail.com' } })
// } catch (e) {
//   if (e instanceof Prisma.PrismaClientKnownRequestError) {
//     // The .code property can be accessed in a type-safe manner
//     if (e.code === 'P2002') {
//       console.log(
//         'There is a unique constraint violation, a new user cannot be created with this email',
//       )
//     }
//   }
//   throw e
// }
export {}
