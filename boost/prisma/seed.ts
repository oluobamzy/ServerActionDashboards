import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@test.com"},
    update: {},
    create: {
      email: "test@test.com",
      password: "testPassword",
      username: "testUser",
    }
  })
  console.log({user});
  const product = await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Test Product",
      description: "Test Description",
      price: 1000,
      userId: user.id,
    }
  }) // Add your product data here
  console.log({product});
}

main()
.then(() => prisma.$disconnect())
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
