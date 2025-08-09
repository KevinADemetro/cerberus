import { slugify } from "@/src/utils/formatter";
import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const categoriesData: Prisma.CategoryCreateInput[] = [
  {
    title: "Casual",
    products: {
      create: [
        {
          name: "Tênis Conforto",
          slug: slugify("Tênis Conforto"),
          price: 120,
          starRating: 4.5,
          discountRate: 50,
        },
        {
          name: "Camisa Polo",
          slug: slugify("Camisa Polo"),
          price: 80,
          starRating: 4.2,
          discountRate: 40,
        },
        {
          name: "Calça Jeans Slim",
          slug: slugify("Calça Jeans Slim"),
          price: 150,
          starRating: 4.8,
          discountRate: 30,
        },
      ],
    },
  },
  {
    title: "Esportivo",
    products: {
      create: [
        {
          name: "Tênis de Corrida",
          slug: slugify("Tênis de Corrida"),
          price: 250,
          starRating: 4.9,
          discountRate: 35,
        },
        {
          name: "Camiseta Dry Fit",
          slug: slugify("Camiseta Dry Fit"),
          price: 60,
          starRating: 4.7,
          discountRate: 55,
        },
        {
          name: "Shorts de Treino",
          slug: slugify("Shorts de Treino"),
          price: 70,
          starRating: 4.5,
          discountRate: 45,
        },
      ],
    },
  },
  {
    title: "Formal",
    products: {
      create: [
        {
          name: "Sapato Social Couro",
          slug: slugify("Sapato Social Couro"),
          price: 300,
          starRating: 4.6,
          discountRate: 25,
        },
        {
          name: "Camisa Social Slim",
          slug: slugify("Camisa Social Slim"),
          price: 150,
          starRating: 4.4,
          discountRate: 40,
        },
        {
          name: "Gravata Seda",
          slug: slugify("Gravata Seda"),
          price: 90,
          starRating: 4.3,
          discountRate: 30,
        },
      ],
    },
  },
  {
    title: "Acessórios",
    products: {
      create: [
        {
          name: "Relógio Esportivo",
          slug: slugify("Relógio Esportivo"),
          price: 200,
          starRating: 4.8,
          discountRate: 50,
        },
        {
          name: "Boné Trucker",
          slug: slugify("Boné Trucker"),
          price: 45,
          starRating: 4.5,
          discountRate: 60,
        },
        {
          name: "Cinto de Couro",
          slug: slugify("Cinto de Couro"),
          price: 75,
          starRating: 4.4,
          discountRate: 35,
        },
      ],
    },
  },
  {
    title: "Inverno",
    products: {
      create: [
        {
          name: "Jaqueta de Couro",
          slug: slugify("Jaqueta de Couro"),
          price: 400,
          starRating: 4.9,
          discountRate: 20,
        },
        {
          name: "Moletom Canguru",
          slug: slugify("Moletom Canguru"),
          price: 180,
          starRating: 4.7,
          discountRate: 50,
        },
        {
          name: "Cachecol de Lã",
          slug: slugify("Cachecol de Lã"),
          price: 60,
          starRating: 4.6,
          discountRate: 40,
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
