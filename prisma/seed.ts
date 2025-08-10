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
          description: "Tênis confortável para uso diário, com design moderno.",
          price: 120,
          starRating: 4.5,
          discountRate: 50,
          variants: {
            create: [
              { color: "Preto", size: "37", stock: 5 },
              { color: "Preto", size: "38", stock: 3 },
              { color: "Preto", size: "39", stock: 3 },
              { color: "Preto", size: "40", stock: 3 },
              { color: "Preto", size: "41", stock: 2 },
              { color: "Preto", size: "42", stock: 0 },
              { color: "Preto", size: "43", stock: 0 },
              { color: "Preto", size: "44", stock: 5 },
              { color: "Branco", size: "40", stock: 4 },
              { color: "Branco", size: "41", stock: 4 },
              { color: "Branco", size: "42", stock: 4 },
              { color: "Branco", size: "43", stock: 4 },
              { color: "Branco", size: "45", stock: 4 },
            ],
          },
        },
        {
          name: "Camisa Polo",
          slug: slugify("Camisa Polo"),
          description: "Camisa polo clássica, perfeita para ocasiões casuais e formais.",
          price: 80,
          starRating: 4.2,
          discountRate: 40,
          variants: {
            create: [
              { color: "Azul", size: "P", stock: 8 },
              { color: "Azul", size: "M", stock: 6 },
              { color: "Branca", size: "G", stock: 4 },
              { color: "Branca", size: "GG", stock: 2 },
            ],
          },
        },
        {
          name: "Calça Jeans Slim",
          slug: slugify("Calça Jeans Slim"),
          description: "Calça jeans slim fit que combina estilo e conforto.",
          price: 150,
          starRating: 4.8,
          discountRate: 30,
          variants: {
            create: [
              { color: "Azul Jeans", size: "38", stock: 5 },
              { color: "Azul Jeans", size: "40", stock: 4 },
              { color: "Preta", size: "42", stock: 3 },
            ],
          },
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
          description: "Tênis leve e respirável ideal para corrida e atividades físicas.",
          price: 250,
          starRating: 4.9,
          discountRate: 35,
          variants: {
            create: [
              { color: "Preto", size: "39", stock: 4 },
              { color: "Preto", size: "40", stock: 6 },
              { color: "Azul", size: "41", stock: 5 },
            ],
          },
        },
        {
          name: "Camiseta Dry Fit",
          slug: slugify("Camiseta Dry Fit"),
          description: "Camiseta esportiva com tecido dry fit que mantém o corpo seco.",
          price: 60,
          starRating: 4.7,
          discountRate: 55,
          variants: {
            create: [
              { color: "Preto", size: "P", stock: 10 },
              { color: "Preto", size: "M", stock: 8 },
              { color: "Azul", size: "G", stock: 6 },
            ],
          },
        },
        {
          name: "Shorts de Treino",
          slug: slugify("Shorts de Treino"),
          description: "Shorts confortáveis e leves para treinos intensos.",
          price: 70,
          starRating: 4.5,
          discountRate: 45,
          variants: {
            create: [
              { color: "Preto", size: "P", stock: 7 },
              { color: "Preto", size: "M", stock: 5 },
              { color: "Cinza", size: "G", stock: 4 },
            ],
          },
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
          description: "Sapato social em couro legítimo, ideal para eventos formais.",
          price: 300,
          starRating: 4.6,
          discountRate: 25,
          variants: {
            create: [
              { color: "Preto", size: "40", stock: 5 },
              { color: "Preto", size: "41", stock: 3 },
              { color: "Marrom", size: "42", stock: 4 },
            ],
          },
        },
        {
          name: "Camisa Social Slim",
          slug: slugify("Camisa Social Slim"),
          description: "Camisa social slim fit com corte moderno e elegante.",
          price: 150,
          starRating: 4.4,
          discountRate: 40,
          variants: {
            create: [
              { color: "Branca", size: "P", stock: 6 },
              { color: "Branca", size: "M", stock: 4 },
              { color: "Azul Claro", size: "G", stock: 3 },
            ],
          },
        },
        {
          name: "Gravata Seda",
          slug: slugify("Gravata Seda"),
          description: "Gravata feita em seda premium para um acabamento sofisticado.",
          price: 90,
          starRating: 4.3,
          discountRate: 30,
          variants: {
            create: [
              { color: "Preto", size: "Único", stock: 10 },
              { color: "Vermelho", size: "Único", stock: 8 },
            ],
          },
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
          description: "Relógio com design esportivo e resistência à água.",
          price: 200,
          starRating: 4.8,
          discountRate: 50,
          variants: {
            create: [
              { color: "Preto", size: "Único", stock: 5 },
              { color: "Prata", size: "Único", stock: 3 },
            ],
          },
        },
        {
          name: "Boné Trucker",
          slug: slugify("Boné Trucker"),
          description: "Boné estilo trucker, ajustável e confortável.",
          price: 45,
          starRating: 4.5,
          discountRate: 60,
          variants: {
            create: [
              { color: "Preto", size: "Único", stock: 7 },
              { color: "Azul", size: "Único", stock: 4 },
            ],
          },
        },
        {
          name: "Cinto de Couro",
          slug: slugify("Cinto de Couro"),
          description: "Cinto de couro legítimo com fivela metálica resistente.",
          price: 75,
          starRating: 4.4,
          discountRate: 35,
          variants: {
            create: [
              { color: "Preto", size: "M", stock: 6 },
              { color: "Marrom", size: "G", stock: 5 },
            ],
          },
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
          description: "Jaqueta de couro legítimo, quente e estilosa para o inverno.",
          price: 400,
          starRating: 4.9,
          discountRate: 20,
          variants: {
            create: [
              { color: "Preta", size: "M", stock: 5 },
              { color: "Preta", size: "G", stock: 4 },
              { color: "Marrom", size: "GG", stock: 3 },
            ],
          },
        },
        {
          name: "Moletom Canguru",
          slug: slugify("Moletom Canguru"),
          description: "Moletom com capuz, confortável e ideal para dias frios.",
          price: 180,
          starRating: 4.7,
          discountRate: 50,
          variants: {
            create: [
              { color: "Cinza", size: "P", stock: 6 },
              { color: "Cinza", size: "M", stock: 5 },
              { color: "Preto", size: "G", stock: 3 },
            ],
          },
        },
        {
          name: "Cachecol de Lã",
          slug: slugify("Cachecol de Lã"),
          description: "Cachecol macio de lã para proteção e estilo.",
          price: 60,
          starRating: 4.6,
          discountRate: 40,
          variants: {
            create: [
              { color: "Preto", size: "Único", stock: 8 },
              { color: "Vermelho", size: "Único", stock: 5 },
            ],
          },
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
