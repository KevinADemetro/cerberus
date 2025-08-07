import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const categoriesData: Prisma.CategoryCreateInput[] = [
  {
    title: "Casual",
    products: {
      create: [
        {
          name: "Tenis dahora",
          price: 100,
          starRating: 5,
          discountRate: 60,
        },
      ],
    },
  },
];

export async function main() {
  for (const c of categoriesData) {
    await prisma.category.create({ data: c });
  }
}

main();
